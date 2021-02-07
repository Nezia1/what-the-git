import { useState } from "react";
import "./App.css";
import gitCommands from "./git-commands";
import {
  getAvailableFlagsAsArray,
  getMatchingFlags,
} from "./git-command-parsing";
const parseArgs = require("minimist");

// Gets the matching git command from the git-commands.js file, and formats the description using the arguments if needed.
//TODO: Get the list of boolean flags from the commands file, and make it command specific.
//TODO: Also add a description of the flags.

function getGitCommand(inputCommand) {
  // Get the command name and check if it exists
  const inputCommandName = inputCommand.split(" ")[1];
  const matchingCommand = gitCommands.commands.find(
    (command) => command.name === inputCommandName
  );
  if (!matchingCommand) {
    return null;
  }

  // Get all the available flags
  const availableFlags = gitCommands.commands.find(
    (command) => command.name === inputCommandName
  ).flags;

  // These arrays exist so they can be used with minimist
  const availableFlagsAsArrays = getAvailableFlagsAsArray(availableFlags);

  // Parse the arguments
  const parsedArgs = parseArgs(inputCommand.split(" "), {
    boolean: availableFlagsAsArrays.booleanFlagsArray,
    string: availableFlagsAsArrays.stringFlagsArray,
  });

  // Generate a list of flags with their corresponding descriptions
  const matchingFlags = getMatchingFlags(availableFlags, parsedArgs);
  console.log(matchingFlags);

  // Generate a description based on the command and add a list of flags descriptions if needed
  const updatedMatchingCommand = {
    ...matchingCommand,
    description: matchingCommand.description.replace(
      "%s",
      parsedArgs._.slice(2).join(", ")
    ),
    flagsDescriptions: getParsedFlagsDescriptions(matchingFlags, parsedArgs),
  };

  return updatedMatchingCommand;
}

// Gets the flags descriptions and parses them if needed
// TODO: Fix arguments between double quotes not working
function getParsedFlagsDescriptions(flagsDescriptions, commandArguments) {
  console.log(commandArguments);
  return flagsDescriptions.map((flag) => {
    if (flag.isString) {
      // Gets the matching string value for the current flag
      const stringFlagValue = Object.entries(commandArguments).find(
        ([argumentKey]) => {
          if (flag.hasOwnProperty("aliases")) {
            return (
              argumentKey === flag.name || flag.aliases.includes(argumentKey)
            );
          }
          return argumentKey === flag.name;
        }
      )[1];
      return {
        ...flag,
        description: flag.description.replace("%s", stringFlagValue),
      };
    }
    return flag;
  });
}

function renderCommandDescription(command) {
  let flagsDescriptions;
  if (command.flagsDescriptions) {
    flagsDescriptions = command.flagsDescriptions.map((flag) => {
      return (
        <div>
          <h3>
            --{flag.name}
            {flag.hasOwnProperty("aliases")
              ? ` (${flag.aliases.map((alias) => `-${alias}`).join(" / ")})`
              : ""}
          </h3>
          <p>{flag.description}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>git {command.name}</h3>
      <p>{command.description}</p>
      {Object.keys(flagsDescriptions).length > 0 && <h2>Flags</h2>}
      {Object.keys(flagsDescriptions).length > 0 && flagsDescriptions}
    </div>
  );
}

function App() {
  const [matchingCommand, setMatchingCommand] = useState();
  const [inputCommand, setInputCommand] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>What the git</h1>
        <h2>Enter a git command and have it explained to you</h2>
        <input
          type="text"
          className="input-command"
          onChange={(e) => setInputCommand(e.target.value)}
        />
      </header>
      <div className="get-command-section">
        <button
          className="get-command-button"
          onClick={() => setMatchingCommand(getGitCommand(inputCommand))}
        >
          Git it
        </button>
        {matchingCommand && renderCommandDescription(matchingCommand)}
      </div>
    </div>
  );
}

export default App;

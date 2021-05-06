const gitCommands = {
    commands:  [
	{
		"name": "git",
		"description": "the stupid content tracker",
		"flags": [
			{
				"name": "version",
				"aliases": [],
				"description": "Prints the Git suite version that the git program came from.",
				"isString": false
			},
			{
				"name": "help",
				"aliases": [],
				"description": "Prints the synopsis and a list of the most commonly used\ncommands. If the option --all or -a is given then all\navailable commands are printed. If a Git command is named this\noption will bring up the manual page for that command.\n\nOther options are available to control how the manual page is\ndisplayed. See git-help[1] for more information,\nbecause git --help ... is converted internally into git\nhelp ....",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Run as if git was started in <path> instead of the current working\ndirectory.  When multiple -C options are given, each subsequent\nnon-absolute -C <path> is interpreted relative to the preceding -C\n<path>.  If <path> is present but empty, e.g. -C \"\", then the\ncurrent working directory is left unchanged.\n\nThis option affects options that expect path name like --git-dir and\n--work-tree in that their interpretations of the path names would be\nmade relative to the working directory caused by the -C option. For\nexample the following invocations are equivalent:\n\n\n\ngit --git-dir=a.git --work-tree=b -C c status\ngit --git-dir=c/a.git --work-tree=c/b status",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Pass a configuration parameter to the command. The value\ngiven will override values from configuration files.\nThe <name> is expected in the same format as listed by\ngit config (subkeys separated by dots).\n\nNote that omitting the = in git -c foo.bar ... is allowed and sets\nfoo.bar to the boolean true value (just like [foo]bar would in a\nconfig file). Including the equals but with an empty value (like git -c\nfoo.bar= ...) sets foo.bar to the empty string which git config\n--type=bool will convert to false.",
				"isString": false
			},
			{
				"name": "config-env",
				"aliases": [],
				"description": "Like -c <name>=<value>, give configuration variable\n<name> a value, where <envvar> is the name of an\nenvironment variable from which to retrieve the value. Unlike\n-c there is no shortcut for directly setting the value to an\nempty string, instead the environment variable itself must be\nset to the empty string.  It is an error if the <envvar> does not exist\nin the environment. <envvar> may not contain an equals sign\nto avoid ambiguity with <name> containing one.\n\nThis is useful for cases where you want to pass transitory\nconfiguration options to git, but are doing so on OS’s where\nother processes might be able to read your cmdline\n(e.g. /proc/self/cmdline), but not your environ\n(e.g. /proc/self/environ). That behavior is the default on\nLinux, but may not be on your system.\n\n\nNote that this might add security for variables such as\nhttp.extraHeader where the sensitive information is part of\nthe value, but not e.g. url.<base>.insteadOf where the\nsensitive information can be part of the key.",
				"isString": false
			},
			{
				"name": "exec-path",
				"aliases": [],
				"description": "Path to wherever your core Git programs are installed.\nThis can also be controlled by setting the GIT_EXEC_PATH\nenvironment variable. If no path is given, git will print\nthe current setting and then exit.",
				"isString": false
			},
			{
				"name": "html-path",
				"aliases": [],
				"description": "Print the path, without trailing slash, where Git’s HTML\ndocumentation is installed and exit.",
				"isString": false
			},
			{
				"name": "man-path",
				"aliases": [],
				"description": "Print the manpath (see man(1)) for the man pages for\nthis version of Git and exit.",
				"isString": false
			},
			{
				"name": "info-path",
				"aliases": [],
				"description": "Print the path where the Info files documenting this\nversion of Git are installed and exit.",
				"isString": false
			},
			{
				"name": "paginate",
				"aliases": [
					"p"
				],
				"description": "Pipe all output into less (or if set, $PAGER) if standard\noutput is a terminal.  This overrides the pager.<cmd>\nconfiguration options (see the \"Configuration Mechanism\" section\nbelow).",
				"isString": false
			},
			{
				"name": "no-pager",
				"aliases": [
					"P"
				],
				"description": "Do not pipe Git output into a pager.",
				"isString": false
			},
			{
				"name": "git-dir",
				"aliases": [],
				"description": "Set the path to the repository (\".git\" directory). This can also be\ncontrolled by setting the GIT_DIR environment variable. It can be\nan absolute path or relative path to current working directory.\n\nSpecifying the location of the \".git\" directory using this\noption (or GIT_DIR environment variable) turns off the\nrepository discovery that tries to find a directory with\n\".git\" subdirectory (which is how the repository and the\ntop-level of the working tree are discovered), and tells Git\nthat you are at the top level of the working tree.  If you\nare not at the top-level directory of the working tree, you\nshould tell Git where the top-level of the working tree is,\nwith the --work-tree=<path> option (or GIT_WORK_TREE\nenvironment variable)\n\n\nIf you just want to run git as if it was started in <path> then use\ngit -C <path>.",
				"isString": false
			},
			{
				"name": "work-tree",
				"aliases": [],
				"description": "Set the path to the working tree. It can be an absolute path\nor a path relative to the current working directory.\nThis can also be controlled by setting the GIT_WORK_TREE\nenvironment variable and the core.worktree configuration\nvariable (see core.worktree in git-config[1] for a\nmore detailed discussion).",
				"isString": false
			},
			{
				"name": "namespace",
				"aliases": [],
				"description": "Set the Git namespace.  See gitnamespaces[7] for more\ndetails.  Equivalent to setting the GIT_NAMESPACE environment\nvariable.",
				"isString": false
			},
			{
				"name": "super-prefix",
				"aliases": [],
				"description": "Currently for internal use only.  Set a prefix which gives a path from\nabove a repository down to its root.  One use is to give submodules\ncontext about the superproject that invoked it.",
				"isString": false
			},
			{
				"name": "bare",
				"aliases": [],
				"description": "Treat the repository as a bare repository.  If GIT_DIR\nenvironment is not set, it is set to the current working\ndirectory.",
				"isString": false
			},
			{
				"name": "no-replace-objects",
				"aliases": [],
				"description": "Do not use replacement refs to replace Git objects. See\ngit-replace[1] for more information.",
				"isString": false
			},
			{
				"name": "literal-pathspecs",
				"aliases": [],
				"description": "Treat pathspecs literally (i.e. no globbing, no pathspec magic).\nThis is equivalent to setting the GIT_LITERAL_PATHSPECS environment\nvariable to 1.",
				"isString": false
			},
			{
				"name": "glob-pathspecs",
				"aliases": [],
				"description": "Add \"glob\" magic to all pathspec. This is equivalent to setting\nthe GIT_GLOB_PATHSPECS environment variable to 1. Disabling\nglobbing on individual pathspecs can be done using pathspec\nmagic \":(literal)\"",
				"isString": false
			},
			{
				"name": "noglob-pathspecs",
				"aliases": [],
				"description": "Add \"literal\" magic to all pathspec. This is equivalent to setting\nthe GIT_NOGLOB_PATHSPECS environment variable to 1. Enabling\nglobbing on individual pathspecs can be done using pathspec\nmagic \":(glob)\"",
				"isString": false
			},
			{
				"name": "icase-pathspecs",
				"aliases": [],
				"description": "Add \"icase\" magic to all pathspec. This is equivalent to setting\nthe GIT_ICASE_PATHSPECS environment variable to 1.",
				"isString": false
			},
			{
				"name": "no-optional-locks",
				"aliases": [],
				"description": "Do not perform optional operations that require locks. This is\nequivalent to setting the GIT_OPTIONAL_LOCKS to 0.",
				"isString": false
			},
			{
				"name": "list-cmds",
				"aliases": [],
				"description": "List commands by group. This is an internal/experimental\noption and may change or be removed in the future. Supported\ngroups are: builtins, parseopt (builtin commands that use\nparse-options), main (all commands in libexec directory),\nothers (all other commands in $PATH that have git- prefix),\nlist-<category> (see categories in command-list.txt),\nnohelpers (exclude helper commands), alias and config\n(retrieve command list from config variable completion.commands)",
				"isString": false
			}
		]
	},
	{
		"name": "config",
		"description": "Get and set repository or global options",
		"flags": [
			{
				"name": "replace-all",
				"aliases": [],
				"description": "Default behavior is to replace at most one line. This replaces\nall lines matching the key (and optionally the value-pattern).",
				"isString": false
			},
			{
				"name": "add",
				"aliases": [],
				"description": "Adds a new line to the option without altering any existing\nvalues.  This is the same as providing ^$ as the value-pattern\nin --replace-all.",
				"isString": false
			},
			{
				"name": "get",
				"aliases": [],
				"description": "Get the value for a given key (optionally filtered by a regex\nmatching the value). Returns error code 1 if the key was not\nfound and the last value if multiple key values were found.",
				"isString": false
			},
			{
				"name": "get-all",
				"aliases": [],
				"description": "Like get, but returns all values for a multi-valued key.",
				"isString": false
			},
			{
				"name": "get-regexp",
				"aliases": [],
				"description": "Like --get-all, but interprets the name as a regular expression and\nwrites out the key names.  Regular expression matching is currently\ncase-sensitive and done against a canonicalized version of the key\nin which section and variable names are lowercased, but subsection\nnames are not.",
				"isString": false
			},
			{
				"name": "get-urlmatch",
				"aliases": [],
				"description": "When given a two-part name section.key, the value for\nsection.<url>.key whose <url> part matches the best to the\ngiven URL is returned (if no such key exists, the value for\nsection.key is used as a fallback).  When given just the\nsection as name, do so for all the keys in the section and\nlist them.  Returns error code 1 if no value is found.",
				"isString": false
			},
			{
				"name": "global",
				"aliases": [],
				"description": "For writing options: write to global ~/.gitconfig file\nrather than the repository .git/config, write to\n$XDG_CONFIG_HOME/git/config file if this file exists and the\n~/.gitconfig file doesn’t.\n\nFor reading options: read only from global ~/.gitconfig and from\n$XDG_CONFIG_HOME/git/config rather than from all available files.\n\n\nSee also FILES.",
				"isString": false
			},
			{
				"name": "system",
				"aliases": [],
				"description": "For writing options: write to system-wide\n$(prefix)/etc/gitconfig rather than the repository\n.git/config.\n\nFor reading options: read only from system-wide $(prefix)/etc/gitconfig\nrather than from all available files.\n\n\nSee also FILES.",
				"isString": false
			},
			{
				"name": "local",
				"aliases": [],
				"description": "For writing options: write to the repository .git/config file.\nThis is the default behavior.\n\nFor reading options: read only from the repository .git/config rather than\nfrom all available files.\n\n\nSee also FILES.",
				"isString": false
			},
			{
				"name": "worktree",
				"aliases": [],
				"description": "Similar to --local except that .git/config.worktree is\nread from or written to if extensions.worktreeConfig is\npresent. If not it’s the same as --local.",
				"isString": false
			},
			{
				"name": "file",
				"aliases": [
					"f"
				],
				"description": "Use the given config file instead of the one specified by GIT_CONFIG.",
				"isString": false
			},
			{
				"name": "blob",
				"aliases": [],
				"description": "Similar to --file but use the given blob instead of a file. E.g.\nyou can use master:.gitmodules to read values from the file\n.gitmodules in the master branch. See \"SPECIFYING REVISIONS\"\nsection in gitrevisions[7] for a more complete list of\nways to spell blob names.",
				"isString": false
			},
			{
				"name": "remove-section",
				"aliases": [],
				"description": "Remove the given section from the configuration file.",
				"isString": false
			},
			{
				"name": "rename-section",
				"aliases": [],
				"description": "Rename the given section to a new name.",
				"isString": false
			},
			{
				"name": "unset",
				"aliases": [],
				"description": "Remove the line matching the key from config file.",
				"isString": false
			},
			{
				"name": "unset-all",
				"aliases": [],
				"description": "Remove all lines matching the key from config file.",
				"isString": false
			},
			{
				"name": "list",
				"aliases": [
					"l"
				],
				"description": "List all variables set in config file, along with their values.",
				"isString": false
			},
			{
				"name": "fixed-value",
				"aliases": [],
				"description": "When used with the value-pattern argument, treat value-pattern as\nan exact string instead of a regular expression. This will restrict\nthe name/value pairs that are matched to only those where the value\nis exactly equal to the value-pattern.",
				"isString": false
			},
			{
				"name": "type",
				"aliases": [],
				"description": "git config will ensure that any input or output is valid under the given\ntype constraint(s), and will canonicalize outgoing values in <type>'s\ncanonical form.\n\nValid <type>'s include:\n\n\n\n\nbool: canonicalize values as either \"true\" or \"false\".\n\n\nint: canonicalize values as simple decimal numbers. An optional suffix of\nk, m, or g will cause the value to be multiplied by 1024, 1048576, or\n1073741824 upon input.\n\n\nbool-or-int: canonicalize according to either bool or int, as described\nabove.\n\n\npath: canonicalize by adding a leading ~ to the value of $HOME and\n~user to the home directory for the specified user. This specifier has no\neffect when setting the value (but you can use git config section.variable\n~/ from the command line to let your shell do the expansion.)\n\n\nexpiry-date: canonicalize by converting from a fixed or relative date-string\nto a timestamp. This specifier has no effect when setting the value.\n\n\ncolor: When getting a value, canonicalize by converting to an ANSI color\nescape sequence. When setting a value, a sanity-check is performed to ensure\nthat the given value is canonicalize-able as an ANSI color, but it is written\nas-is.",
				"isString": false
			},
			{
				"name": "bool-or-int",
				"aliases": [
					"bool",
					"int",
					"path",
					"expiry-date"
				],
				"description": "Historical options for selecting a type specifier. Prefer instead --type\n(see above).",
				"isString": false
			},
			{
				"name": "no-type",
				"aliases": [],
				"description": "Un-sets the previously set type specifier (if one was previously set). This\noption requests that git config not canonicalize the retrieved variable.\n--no-type has no effect without --type=<type> or --<type>.",
				"isString": false
			},
			{
				"name": "null",
				"aliases": [
					"z"
				],
				"description": "For all options that output values and/or keys, always\nend values with the null character (instead of a\nnewline). Use newline instead as a delimiter between\nkey and value. This allows for secure parsing of the\noutput without getting confused e.g. by values that\ncontain line breaks.",
				"isString": false
			},
			{
				"name": "name-only",
				"aliases": [],
				"description": "Output only the names of config variables for --list or\n--get-regexp.",
				"isString": false
			},
			{
				"name": "show-origin",
				"aliases": [],
				"description": "Augment the output of all queried config options with the\norigin type (file, standard input, blob, command line) and\nthe actual origin (config file path, ref, or blob id if\napplicable).",
				"isString": false
			},
			{
				"name": "show-scope",
				"aliases": [],
				"description": "Similar to --show-origin in that it augments the output of\nall queried config options with the scope of that value\n(local, global, system, command).",
				"isString": false
			},
			{
				"name": "get-colorbool",
				"aliases": [],
				"description": "Find the color setting for name (e.g. color.diff) and output\n\"true\" or \"false\".  stdout-is-tty should be either \"true\" or\n\"false\", and is taken into account when configuration says\n\"auto\".  If stdout-is-tty is missing, then checks the standard\noutput of the command itself, and exits with status 0 if color\nis to be used, or exits with status 1 otherwise.\nWhen the color setting for name is undefined, the command uses\ncolor.ui as fallback.",
				"isString": false
			},
			{
				"name": "get-color",
				"aliases": [],
				"description": "Find the color configured for name (e.g. color.diff.new) and\noutput it as the ANSI color escape sequence to the standard\noutput.  The optional default parameter is used instead, if\nthere is no color configured for name.\n\n--type=color [--default=<default>] is preferred over --get-color\n(but note that --get-color will omit the trailing newline printed by\n--type=color).",
				"isString": false
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "Opens an editor to modify the specified config file; either\n--system, --global, or repository (default).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Respect include.* directives in config files when looking up\nvalues. Defaults to off when a specific file is given (e.g.,\nusing --file, --global, etc) and on when searching all\nconfig files.",
				"isString": false
			},
			{
				"name": "default",
				"aliases": [],
				"description": "When using --get, and the requested variable is not found, behave as if\n<value> were the value assigned to the that variable.",
				"isString": false
			}
		]
	},
	{
		"name": "help",
		"description": "Display help information about Git",
		"flags": [
			{
				"name": "all",
				"aliases": [
					"a"
				],
				"description": "Prints all the available commands on the standard output. This\noption overrides any given command or guide name.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [],
				"description": "When used with --all print description for all recognized\ncommands. This is the default.",
				"isString": false
			},
			{
				"name": "config",
				"aliases": [
					"c"
				],
				"description": "List all available configuration variables. This is a short\nsummary of the list in git-config[1].",
				"isString": false
			},
			{
				"name": "guides",
				"aliases": [
					"g"
				],
				"description": "Prints a list of the Git concept guides on the standard output. This\noption overrides any given command or guide name.",
				"isString": false
			},
			{
				"name": "info",
				"aliases": [
					"i"
				],
				"description": "Display manual page for the command in the info format. The\ninfo program will be used for that purpose.",
				"isString": false
			},
			{
				"name": "man",
				"aliases": [
					"m"
				],
				"description": "Display manual page for the command in the man format. This\noption may be used to override a value set in the\nhelp.format configuration variable.\n\nBy default the man program will be used to display the manual page,\nbut the man.viewer configuration variable may be used to choose\nother display programs (see below).",
				"isString": false
			},
			{
				"name": "web",
				"aliases": [
					"w"
				],
				"description": "Display manual page for the command in the web (HTML)\nformat. A web browser will be used for that purpose.\n\nThe web browser can be specified using the configuration variable\nhelp.browser, or web.browser if the former is not set. If none of\nthese config variables is set, the git web--browse helper script\n(called by git help) will pick a suitable default. See\ngit-web--browse[1] for more information about this.",
				"isString": false
			}
		]
	},
	{
		"name": "bugreport",
		"description": "Collect information for user to file a bug report",
		"flags": [
			{
				"name": "output-directory",
				"aliases": [
					"o"
				],
				"description": "Place the resulting bug report file in <path> instead of the root of\nthe Git repository.",
				"isString": false
			},
			{
				"name": "suffix",
				"aliases": [
					"s"
				],
				"description": "Specify an alternate suffix for the bugreport name, to create a file\nnamed git-bugreport-<formatted suffix>. This should take the form of a\nstrftime(3) format string; the current local time will be used.",
				"isString": false
			}
		]
	},
	{
		"name": "init",
		"description": "Create an empty Git repository or reinitialize an existing one",
		"flags": [
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Only print error and warning messages; all other output will be suppressed.",
				"isString": false
			},
			{
				"name": "bare",
				"aliases": [],
				"description": "Create a bare repository. If GIT_DIR environment is not set, it is set to the\ncurrent working directory.",
				"isString": false
			},
			{
				"name": "object-format",
				"aliases": [],
				"description": "Specify the given object format (hash algorithm) for the repository.  The valid\nvalues are sha1 and (if enabled) sha256.  sha1 is the default.\n\nTHIS OPTION IS EXPERIMENTAL! SHA-256 support is experimental and still\nin an early stage.  A SHA-256 repository will in general not be able to\nshare work with \"regular\" SHA-1 repositories.  It should be assumed\nthat, e.g., Git internal file formats in relation to SHA-256\nrepositories may change in backwards-incompatible ways.  Only use\n--object-format=sha256 for testing purposes.",
				"isString": false
			},
			{
				"name": "template",
				"aliases": [],
				"description": "Specify the directory from which templates will be used.  (See the \"TEMPLATE\nDIRECTORY\" section below.)",
				"isString": false
			},
			{
				"name": "separate-git-dir",
				"aliases": [],
				"description": "Instead of initializing the repository as a directory to either $GIT_DIR or\n./.git/, create a text file there containing the path to the actual\nrepository.  This file acts as filesystem-agnostic Git symbolic link to the\nrepository.\n\nIf this is reinitialization, the repository will be moved to the specified path.",
				"isString": false
			},
			{
				"name": "initial-branch",
				"aliases": [
					"b"
				],
				"description": "Use the specified name for the initial branch in the newly created\nrepository.  If not specified, fall back to the default name (currently\nmaster, but this is subject to change in the future; the name can be\ncustomized via the init.defaultBranch configuration variable).",
				"isString": false
			},
			{
				"name": "shared",
				"aliases": [],
				"description": "Specify that the Git repository is to be shared amongst several users.  This\nallows users belonging to the same group to push into that\nrepository.  When specified, the config variable \"core.sharedRepository\" is\nset so that files and directories under $GIT_DIR are created with the\nrequested permissions.  When not specified, Git will use permissions reported\nby umask(2).\n\nThe option can have the following values, defaulting to group if no value\nis given:\n\n\n\n\n\n umask (or false) \n\nUse permissions reported by umask(2). The default, when --shared is not\nspecified.\n\n group (or true) \n\nMake the repository group-writable, (and g+sx, since the git group may be not\nthe primary group of all users). This is used to loosen the permissions of an\notherwise safe umask(2) value. Note that the umask still applies to the other\npermission bits (e.g. if umask is 0022, using group will not remove read\nprivileges from other (non-group) users). See 0xxx for how to exactly specify\nthe repository permissions.\n\n all (or world or everybody) \n\nSame as group, but make the repository readable by all users.\n\n 0xxx \n\n0xxx is an octal number and each file will have mode 0xxx. 0xxx will\noverride users' umask(2) value (and not only loosen permissions as group and\nall does). 0640 will create a repository which is group-readable, but not\ngroup-writable or accessible to others. 0660 will create a repo that is\nreadable and writable to the current user and group, but inaccessible to others.",
				"isString": false
			}
		]
	},
	{
		"name": "clone",
		"description": "Clone a repository into a new directory",
		"flags": [
			{
				"name": "local",
				"aliases": [
					"l"
				],
				"description": "When the repository to clone from is on a local machine,\nthis flag bypasses the normal \"Git aware\" transport\nmechanism and clones the repository by making a copy of\nHEAD and everything under objects and refs directories.\nThe files under .git/objects/ directory are hardlinked\nto save space when possible.\n\nIf the repository is specified as a local path (e.g., /path/to/repo),\nthis is the default, and --local is essentially a no-op.  If the\nrepository is specified as a URL, then this flag is ignored (and we\nnever use the local optimizations).  Specifying --no-local will\noverride the default when /path/to/repo is given, using the regular\nGit transport instead.\n\n\nNOTE: this operation can race with concurrent modification to the\nsource repository, similar to running cp -r src dst while modifying\nsrc.",
				"isString": false
			},
			{
				"name": "no-hardlinks",
				"aliases": [],
				"description": "Force the cloning process from a repository on a local\nfilesystem to copy the files under the .git/objects\ndirectory instead of using hardlinks. This may be desirable\nif you are trying to make a back-up of your repository.",
				"isString": false
			},
			{
				"name": "shared",
				"aliases": [
					"s"
				],
				"description": "When the repository to clone is on the local machine,\ninstead of using hard links, automatically setup\n.git/objects/info/alternates to share the objects\nwith the source repository.  The resulting repository\nstarts out without any object of its own.\n\nNOTE: this is a possibly dangerous operation; do not use\nit unless you understand what it does. If you clone your\nrepository using this option and then delete branches (or use any\nother Git command that makes any existing commit unreferenced) in the\nsource repository, some objects may become unreferenced (or dangling).\nThese objects may be removed by normal Git operations (such as git commit)\nwhich automatically call git maintenance run --auto. (See\ngit-maintenance[1].) If these objects are removed and were referenced\nby the cloned repository, then the cloned repository will become corrupt.\n\n\nNote that running git repack without the --local option in a repository\ncloned with --shared will copy objects from the source repository into a pack\nin the cloned repository, removing the disk space savings of clone --shared.\nIt is safe, however, to run git gc, which uses the --local option by\ndefault.\n\n\nIf you want to break the dependency of a repository cloned with --shared on\nits source repository, you can simply run git repack -a to copy all\nobjects from the source repository into a pack in the cloned repository.",
				"isString": false
			},
			{
				"name": "reference",
				"aliases": [],
				"description": "If the reference repository is on the local machine,\nautomatically setup .git/objects/info/alternates to\nobtain objects from the reference repository.  Using\nan already existing repository as an alternate will\nrequire fewer objects to be copied from the repository\nbeing cloned, reducing network and local storage costs.\nWhen using the --reference-if-able, a non existing\ndirectory is skipped with a warning instead of aborting\nthe clone.\n\nNOTE: see the NOTE for the --shared option, and also the\n--dissociate option.",
				"isString": false
			},
			{
				"name": "dissociate",
				"aliases": [],
				"description": "Borrow the objects from reference repositories specified\nwith the --reference options only to reduce network\ntransfer, and stop borrowing from them after a clone is made\nby making necessary local copies of borrowed objects.  This\noption can also be used when cloning locally from a\nrepository that already borrows objects from another\nrepository—​the new repository will borrow objects from the\nsame repository, and this option can be used to stop the\nborrowing.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Operate quietly.  Progress is not reported to the standard\nerror stream.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Run verbosely. Does not affect the reporting of progress status\nto the standard error stream.",
				"isString": false
			},
			{
				"name": "progress",
				"aliases": [],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless --quiet\nis specified. This flag forces progress status even if the\nstandard error stream is not directed to a terminal.",
				"isString": false
			},
			{
				"name": "server-option",
				"aliases": [],
				"description": "Transmit the given string to the server when communicating using\nprotocol version 2.  The given string must not contain a NUL or LF\ncharacter.  The server’s handling of server options, including\nunknown ones, is server-specific.\nWhen multiple --server-option=<option> are given, they are all\nsent to the other side in the order listed on the command line.",
				"isString": false
			},
			{
				"name": "no-checkout",
				"aliases": [
					"n"
				],
				"description": "No checkout of HEAD is performed after the clone is complete.",
				"isString": false
			},
			{
				"name": "bare",
				"aliases": [],
				"description": "Make a bare Git repository.  That is, instead of\ncreating <directory> and placing the administrative\nfiles in <directory>/.git, make the <directory>\nitself the $GIT_DIR. This obviously implies the --no-checkout\nbecause there is nowhere to check out the working tree.\nAlso the branch heads at the remote are copied directly\nto corresponding local branch heads, without mapping\nthem to refs/remotes/origin/.  When this option is\nused, neither remote-tracking branches nor the related\nconfiguration variables are created.",
				"isString": false
			},
			{
				"name": "sparse",
				"aliases": [],
				"description": "Initialize the sparse-checkout file so the working\ndirectory starts with only the files in the root\nof the repository. The sparse-checkout file can be\nmodified to grow the working directory as needed.",
				"isString": false
			},
			{
				"name": "filter",
				"aliases": [],
				"description": "Use the partial clone feature and request that the server sends\na subset of reachable objects according to a given object filter.\nWhen using --filter, the supplied <filter-spec> is used for\nthe partial clone filter. For example, --filter=blob:none will\nfilter out all blobs (file contents) until needed by Git. Also,\n--filter=blob:limit=<size> will filter out all blobs of size\nat least <size>. For more details on filter specifications, see\nthe --filter option in git-rev-list[1].",
				"isString": false
			},
			{
				"name": "mirror",
				"aliases": [],
				"description": "Set up a mirror of the source repository.  This implies --bare.\nCompared to --bare, --mirror not only maps local branches of the\nsource to local branches of the target, it maps all refs (including\nremote-tracking branches, notes etc.) and sets up a refspec configuration such\nthat all these refs are overwritten by a git remote update in the\ntarget repository.",
				"isString": false
			},
			{
				"name": "origin",
				"aliases": [
					"o"
				],
				"description": "Instead of using the remote name origin to keep track of the upstream\nrepository, use <name>.  Overrides clone.defaultRemoteName from the\nconfig.",
				"isString": false
			},
			{
				"name": "branch",
				"aliases": [
					"b"
				],
				"description": "Instead of pointing the newly created HEAD to the branch pointed\nto by the cloned repository’s HEAD, point to <name> branch\ninstead. In a non-bare repository, this is the branch that will\nbe checked out.\n--branch can also take tags and detaches the HEAD at that commit\nin the resulting repository.",
				"isString": false
			},
			{
				"name": "upload-pack",
				"aliases": [
					"u"
				],
				"description": "When given, and the repository to clone from is accessed\nvia ssh, this specifies a non-default path for the command\nrun on the other end.",
				"isString": false
			},
			{
				"name": "template",
				"aliases": [],
				"description": "Specify the directory from which templates will be used;\n(See the \"TEMPLATE DIRECTORY\" section of git-init[1].)",
				"isString": false
			},
			{
				"name": "config",
				"aliases": [
					"c"
				],
				"description": "Set a configuration variable in the newly-created repository;\nthis takes effect immediately after the repository is\ninitialized, but before the remote history is fetched or any\nfiles checked out.  The key is in the same format as expected by\ngit-config[1] (e.g., core.eol=true). If multiple\nvalues are given for the same key, each value will be written to\nthe config file. This makes it safe, for example, to add\nadditional fetch refspecs to the origin remote.\n\nDue to limitations of the current implementation, some configuration\nvariables do not take effect until after the initial fetch and checkout.\nConfiguration variables known to not take effect are:\nremote.<name>.mirror and remote.<name>.tagOpt.  Use the\ncorresponding --mirror and --no-tags options instead.",
				"isString": false
			},
			{
				"name": "depth",
				"aliases": [],
				"description": "Create a shallow clone with a history truncated to the\nspecified number of commits. Implies --single-branch unless\n--no-single-branch is given to fetch the histories near the\ntips of all branches. If you want to clone submodules shallowly,\nalso pass --shallow-submodules.",
				"isString": false
			},
			{
				"name": "shallow-since",
				"aliases": [],
				"description": "Create a shallow clone with a history after the specified time.",
				"isString": false
			},
			{
				"name": "shallow-exclude",
				"aliases": [],
				"description": "Create a shallow clone with a history, excluding commits\nreachable from a specified remote branch or tag.  This option\ncan be specified multiple times.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Clone only the history leading to the tip of a single branch,\neither specified by the --branch option or the primary\nbranch remote’s HEAD points at.\nFurther fetches into the resulting repository will only update the\nremote-tracking branch for the branch this option was used for the\ninitial cloning.  If the HEAD at the remote did not point at any\nbranch when --single-branch clone was made, no remote-tracking\nbranch is created.",
				"isString": false
			},
			{
				"name": "no-tags",
				"aliases": [],
				"description": "Don’t clone any tags, and set\nremote.<remote>.tagOpt=--no-tags in the config, ensuring\nthat future git pull and git fetch operations won’t follow\nany tags. Subsequent explicit tag fetches will still work,\n(see git-fetch[1]).\n\nCan be used in conjunction with --single-branch to clone and\nmaintain a branch with no references other than a single cloned\nbranch. This is useful e.g. to maintain minimal clones of the default\nbranch of some repository for search indexing.",
				"isString": false
			},
			{
				"name": "recurse-submodules",
				"aliases": [],
				"description": "After the clone is created, initialize and clone submodules\nwithin based on the provided pathspec.  If no pathspec is\nprovided, all submodules are initialized and cloned.\nThis option can be given multiple times for pathspecs consisting\nof multiple entries.  The resulting clone has submodule.active set to\nthe provided pathspec, or \".\" (meaning all submodules) if no\npathspec is provided.\n\nSubmodules are initialized and cloned using their default settings. This is\nequivalent to running\ngit submodule update --init --recursive <pathspec> immediately after\nthe clone is finished. This option is ignored if the cloned repository does\nnot have a worktree/checkout (i.e. if any of --no-checkout/-n, --bare,\nor --mirror is given)",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "All submodules which are cloned will be shallow with a depth of 1.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "All submodules which are cloned will use the status of the submodule’s\nremote-tracking branch to update the submodule, rather than the\nsuperproject’s recorded SHA-1. Equivalent to passing --remote to\ngit submodule update.",
				"isString": false
			},
			{
				"name": "separate-git-dir",
				"aliases": [],
				"description": "Instead of placing the cloned repository where it is supposed\nto be, place the cloned repository at the specified directory,\nthen make a filesystem-agnostic Git symbolic link to there.\nThe result is Git repository can be separated from working\ntree.",
				"isString": false
			},
			{
				"name": "jobs",
				"aliases": [
					"j"
				],
				"description": "The number of submodules fetched at the same time.\nDefaults to the submodule.fetchJobs option.",
				"isString": false
			},
			{
				"name": "<repository>",
				"aliases": [],
				"description": "The (possibly remote) repository to clone from.  See the\nGIT URLS section below for more information on specifying\nrepositories.",
				"isString": true
			},
			{
				"name": "<directory>",
				"aliases": [],
				"description": "The name of a new directory to clone into.  The \"humanish\"\npart of the source repository is used if no directory is\nexplicitly given (repo for /path/to/repo.git and foo\nfor host.xz:foo/.git).  Cloning into an existing directory\nis only allowed if the directory is empty.",
				"isString": true
			}
		]
	},
	{
		"name": "add",
		"description": "Add file contents to the index",
		"flags": [
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "Files to add content from.  Fileglobs (e.g. *.c) can\nbe given to add all matching files.  Also a\nleading directory name (e.g. dir to add dir/file1\nand dir/file2) can be given to update the index to\nmatch the current state of the directory as a whole (e.g.\nspecifying dir will record not just a file dir/file1\nmodified in the working tree, a file dir/file2 added to\nthe working tree, but also a file dir/file3 removed from\nthe working tree). Note that older versions of Git used\nto ignore removed files; use --no-all option if you want\nto add modified or new files but ignore removed ones.\n\nFor more details about the <pathspec> syntax, see the pathspec entry\nin gitglossary[7].",
				"isString": true
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Don’t actually add the file(s), just show if they exist and/or will\nbe ignored.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Be verbose.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "Allow adding otherwise ignored files.",
				"isString": false
			},
			{
				"name": "interactive",
				"aliases": [
					"i"
				],
				"description": "Add modified contents in the working tree interactively to\nthe index. Optional path arguments may be supplied to limit\noperation to a subset of the working tree. See “Interactive\nmode” for details.",
				"isString": false
			},
			{
				"name": "patch",
				"aliases": [
					"p"
				],
				"description": "Interactively choose hunks of patch between the index and the\nwork tree and add them to the index. This gives the user a chance\nto review the difference before adding modified contents to the\nindex.\n\nThis effectively runs add --interactive, but bypasses the\ninitial command menu and directly jumps to the patch subcommand.\nSee “Interactive mode” for details.",
				"isString": false
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "Open the diff vs. the index in an editor and let the user\nedit it.  After the editor was closed, adjust the hunk headers\nand apply the patch to the index.\n\nThe intent of this option is to pick and choose lines of the patch to\napply, or even to modify the contents of lines to be staged. This can be\nquicker and more flexible than using the interactive hunk selector.\nHowever, it is easy to confuse oneself and create a patch that does not\napply to the index. See EDITING PATCHES below.",
				"isString": false
			},
			{
				"name": "update",
				"aliases": [
					"u"
				],
				"description": "Update the index just where it already has an entry matching\n<pathspec>.  This removes as well as modifies index entries to\nmatch the working tree, but adds no new files.\n\nIf no <pathspec> is given when -u option is used, all\ntracked files in the entire working tree are updated (old versions\nof Git used to limit the update to the current directory and its\nsubdirectories).",
				"isString": false
			},
			{
				"name": "no-ignore-removal",
				"aliases": [
					"A",
					"all"
				],
				"description": "Update the index not only where the working tree has a file\nmatching <pathspec> but also where the index already has an\nentry. This adds, modifies, and removes index entries to\nmatch the working tree.\n\nIf no <pathspec> is given when -A option is used, all\nfiles in the entire working tree are updated (old versions\nof Git used to limit the update to the current directory and its\nsubdirectories).",
				"isString": false
			},
			{
				"name": "ignore-removal",
				"aliases": [
					"no-all"
				],
				"description": "Update the index by adding new files that are unknown to the\nindex and files modified in the working tree, but ignore\nfiles that have been removed from the working tree.  This\noption is a no-op when no <pathspec> is used.\n\nThis option is primarily to help users who are used to older\nversions of Git, whose \"git add <pathspec>…​\" was a synonym\nfor \"git add --no-all <pathspec>…​\", i.e. ignored removed files.",
				"isString": false
			},
			{
				"name": "intent-to-add",
				"aliases": [
					"N"
				],
				"description": "Record only the fact that the path will be added later. An entry\nfor the path is placed in the index with no content. This is\nuseful for, among other things, showing the unstaged content of\nsuch files with git diff and committing them with git commit\n-a.",
				"isString": false
			},
			{
				"name": "refresh",
				"aliases": [],
				"description": "Don’t add the file(s), but only refresh their stat()\ninformation in the index.",
				"isString": false
			},
			{
				"name": "ignore-errors",
				"aliases": [],
				"description": "If some files could not be added because of errors indexing\nthem, do not abort the operation, but continue adding the\nothers. The command shall still exit with non-zero status.\nThe configuration variable add.ignoreErrors can be set to\ntrue to make this the default behaviour.",
				"isString": false
			},
			{
				"name": "ignore-missing",
				"aliases": [],
				"description": "This option can only be used together with --dry-run. By using\nthis option the user can check if any of the given files would\nbe ignored, no matter if they are already present in the work\ntree or not.",
				"isString": false
			},
			{
				"name": "no-warn-embedded-repo",
				"aliases": [],
				"description": "By default, git add will warn when adding an embedded\nrepository to the index without using git submodule add to\ncreate an entry in .gitmodules. This option will suppress the\nwarning (e.g., if you are manually performing operations on\nsubmodules).",
				"isString": false
			},
			{
				"name": "renormalize",
				"aliases": [],
				"description": "Apply the \"clean\" process freshly to all tracked files to\nforcibly add them again to the index.  This is useful after\nchanging core.autocrlf configuration or the text attribute\nin order to correct files added with wrong CRLF/LF line endings.\nThis option implies -u.",
				"isString": false
			},
			{
				"name": "chmod",
				"aliases": [],
				"description": "Override the executable bit of the added files.  The executable\nbit is only changed in the index, the files on disk are left\nunchanged.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "Pathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "Only meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This option can be used to separate command-line options from\nthe list of files, (useful when filenames might be mistaken\nfor command-line options).",
				"isString": false
			}
		]
	},
	{
		"name": "status",
		"description": "Show the working tree status",
		"flags": [
			{
				"name": "short",
				"aliases": [
					"s"
				],
				"description": "Give the output in the short-format.",
				"isString": false
			},
			{
				"name": "branch",
				"aliases": [
					"b"
				],
				"description": "Show the branch and tracking info even in short-format.",
				"isString": false
			},
			{
				"name": "show-stash",
				"aliases": [],
				"description": "Show the number of entries currently stashed away.",
				"isString": false
			},
			{
				"name": "porcelain",
				"aliases": [],
				"description": "Give the output in an easy-to-parse format for scripts.\nThis is similar to the short output, but will remain stable\nacross Git versions and regardless of user configuration. See\nbelow for details.\n\nThe version parameter is used to specify the format version.\nThis is optional and defaults to the original version v1 format.",
				"isString": false
			},
			{
				"name": "long",
				"aliases": [],
				"description": "Give the output in the long-format. This is the default.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "In addition to the names of files that have been changed, also\nshow the textual changes that are staged to be committed\n(i.e., like the output of git diff --cached). If -v is specified\ntwice, then also show the changes in the working tree that\nhave not yet been staged (i.e., like the output of git diff).",
				"isString": false
			},
			{
				"name": "untracked-files",
				"aliases": [
					"u[<mode>]"
				],
				"description": "Show untracked files.\n\n\n\nThe mode parameter is used to specify the handling of untracked files.\nIt is optional: it defaults to all, and if specified, it must be\nstuck to the option (e.g. -uno, but not -u no).\n\n\nThe possible options are:\n\n\n\n\nno     - Show no untracked files.\n\n\nnormal - Shows untracked files and directories.\n\n\nall    - Also shows individual files in untracked directories.\n\n\n\n\nWhen -u option is not used, untracked files and directories are\nshown (i.e. the same as specifying normal), to help you avoid\nforgetting to add newly created files.  Because it takes extra work\nto find untracked files in the filesystem, this mode may take some\ntime in a large working tree.\nConsider enabling untracked cache and split index if supported (see\ngit update-index --untracked-cache and git update-index\n--split-index), Otherwise you can use no to have git status\nreturn more quickly without showing untracked files.\n\n\nThe default can be changed using the status.showUntrackedFiles\nconfiguration variable documented in git-config[1].",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Ignore changes to submodules when looking for changes. <when> can be\neither \"none\", \"untracked\", \"dirty\" or \"all\", which is the default.\nUsing \"none\" will consider the submodule modified when it either contains\nuntracked or modified files or its HEAD differs from the commit recorded\nin the superproject and can be used to override any settings of the\nignore option in git-config[1] or gitmodules[5]. When\n\"untracked\" is used submodules are not considered dirty when they only\ncontain untracked content (but they are still scanned for modified\ncontent). Using \"dirty\" ignores all changes to the work tree of submodules,\nonly changes to the commits stored in the superproject are shown (this was\nthe behavior before 1.7.0). Using \"all\" hides all changes to submodules\n(and suppresses the output of submodule summaries when the config option\nstatus.submoduleSummary is set).",
				"isString": false
			},
			{
				"name": "ignored",
				"aliases": [],
				"description": "Show ignored files as well.\n\n\n\nThe mode parameter is used to specify the handling of ignored files.\nIt is optional: it defaults to traditional.\n\n\nThe possible options are:\n\n\n\n\ntraditional - Shows ignored files and directories, unless\n--untracked-files=all is specified, in which case\nindividual files in ignored directories are\ndisplayed.\n\n\nno\t        - Show no ignored files.\n\n\nmatching    - Shows ignored files and directories matching an\nignore pattern.\n\n\n\n\nWhen matching mode is specified, paths that explicitly match an\nignored pattern are shown. If a directory matches an ignore pattern,\nthen it is shown, but not paths contained in the ignored directory. If\na directory does not match an ignore pattern, but all contents are\nignored, then the directory is not shown, but all contents are shown.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Terminate entries with NUL, instead of LF.  This implies\nthe --porcelain=v1 output format if no other format is given.",
				"isString": false
			},
			{
				"name": "column",
				"aliases": [
					"no-column"
				],
				"description": "Display untracked files in columns. See configuration variable\ncolumn.status for option syntax. --column and --no-column\nwithout options are equivalent to always and never\nrespectively.",
				"isString": false
			},
			{
				"name": "no-ahead-behind",
				"aliases": [
					"ahead-behind"
				],
				"description": "Display or do not display detailed ahead/behind counts for the\nbranch relative to its upstream branch.  Defaults to true.",
				"isString": false
			},
			{
				"name": "no-renames",
				"aliases": [
					"renames"
				],
				"description": "Turn on/off rename detection regardless of user configuration.\nSee also git-diff[1] --no-renames.",
				"isString": false
			},
			{
				"name": "find-renames",
				"aliases": [],
				"description": "Turn on rename detection, optionally setting the similarity\nthreshold.\nSee also git-diff[1] --find-renames.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "See the pathspec entry in gitglossary[7].",
				"isString": true
			}
		]
	},
	{
		"name": "diff",
		"description": "Show changes between commits, commit and working tree, etc",
		"flags": [
			{
				"name": "patch",
				"aliases": [
					"p",
					"u"
				],
				"description": "Generate patch (see section on generating patches).\nThis is the default.",
				"isString": false
			},
			{
				"name": "no-patch",
				"aliases": [
					"s"
				],
				"description": "Suppress diff output. Useful for commands like git show that\nshow the patch by default, or to cancel the effect of --patch.",
				"isString": false
			},
			{
				"name": "unified",
				"aliases": [
					"U<n>"
				],
				"description": "Generate diffs with <n> lines of context instead of\nthe usual three.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "output",
				"aliases": [],
				"description": "Output to a specific file instead of stdout.",
				"isString": false
			},
			{
				"name": "output-indicator-context",
				"aliases": [
					"output-indicator-new=<char>",
					"output-indicator-old=<char>"
				],
				"description": "Specify the character used to indicate new, old or context\nlines in the generated patch. Normally they are +, - and\n' ' respectively.",
				"isString": false
			},
			{
				"name": "raw",
				"aliases": [],
				"description": "Generate the diff in raw format.",
				"isString": false
			},
			{
				"name": "patch-with-raw",
				"aliases": [],
				"description": "Synonym for -p --raw.",
				"isString": false
			},
			{
				"name": "indent-heuristic",
				"aliases": [],
				"description": "Enable the heuristic that shifts diff hunk boundaries to make patches\neasier to read. This is the default.",
				"isString": false
			},
			{
				"name": "no-indent-heuristic",
				"aliases": [],
				"description": "Disable the indent heuristic.",
				"isString": false
			},
			{
				"name": "minimal",
				"aliases": [],
				"description": "Spend extra time to make sure the smallest possible\ndiff is produced.",
				"isString": false
			},
			{
				"name": "patience",
				"aliases": [],
				"description": "Generate a diff using the \"patience diff\" algorithm.",
				"isString": false
			},
			{
				"name": "histogram",
				"aliases": [],
				"description": "Generate a diff using the \"histogram diff\" algorithm.",
				"isString": false
			},
			{
				"name": "anchored",
				"aliases": [],
				"description": "Generate a diff using the \"anchored diff\" algorithm.\n\nThis option may be specified more than once.\n\n\nIf a line exists in both the source and destination, exists only once,\nand starts with this text, this algorithm attempts to prevent it from\nappearing as a deletion or addition in the output. It uses the \"patience\ndiff\" algorithm internally.",
				"isString": false
			},
			{
				"name": "diff-algorithm",
				"aliases": [],
				"description": "Choose a diff algorithm. The variants are as follows:\n\n\n\n\n default, myers \n\nThe basic greedy diff algorithm. Currently, this is the default.\n\n minimal \n\nSpend extra time to make sure the smallest possible diff is\nproduced.\n\n patience \n\nUse \"patience diff\" algorithm when generating patches.\n\n histogram \n\nThis algorithm extends the patience algorithm to \"support\nlow-occurrence common elements\".\n\n\n\n\n\n\nFor instance, if you configured the diff.algorithm variable to a\nnon-default value and want to use the default one, then you\nhave to use --diff-algorithm=default option.",
				"isString": false
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Generate a diffstat. By default, as much space as necessary\nwill be used for the filename part, and the rest for the graph\npart. Maximum width defaults to terminal width, or 80 columns\nif not connected to a terminal, and can be overridden by\n<width>. The width of the filename part can be limited by\ngiving another width <name-width> after a comma. The width\nof the graph part can be limited by using\n--stat-graph-width=<width> (affects all commands generating\na stat graph) or by setting diff.statGraphWidth=<width>\n(does not affect git format-patch).\nBy giving a third parameter <count>, you can limit the\noutput to the first <count> lines, followed by ... if\nthere are more.\n\nThese parameters can also be set individually with --stat-width=<width>,\n--stat-name-width=<name-width> and --stat-count=<count>.",
				"isString": false
			},
			{
				"name": "compact-summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information such\nas file creations or deletions (\"new\" or \"gone\", optionally \"+l\"\nif it’s a symlink) and mode changes (\"+x\" or \"-x\" for adding\nor removing executable bit respectively) in diffstat. The\ninformation is put between the filename part and the graph\npart. Implies --stat.",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows number of added and\ndeleted lines in decimal notation and pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.",
				"isString": false
			},
			{
				"name": "shortstat",
				"aliases": [],
				"description": "Output only the last line of the --stat format containing total\nnumber of modified files, as well as number of added and deleted\nlines.",
				"isString": false
			},
			{
				"name": "dirstat",
				"aliases": [
					"X[<param1,param2,…​>]"
				],
				"description": "Output the distribution of relative amount of changes for each\nsub-directory. The behavior of --dirstat can be customized by\npassing it a comma separated list of parameters.\nThe defaults are controlled by the diff.dirstat configuration\nvariable (see git-config[1]).\nThe following parameters are available:\n\n\n\n\n changes \n\nCompute the dirstat numbers by counting the lines that have been\nremoved from the source, or added to the destination. This ignores\nthe amount of pure code movements within a file.  In other words,\nrearranging lines in a file is not counted as much as other changes.\nThis is the default behavior when no parameter is given.\n\n lines \n\nCompute the dirstat numbers by doing the regular line-based diff\nanalysis, and summing the removed/added line counts. (For binary\nfiles, count 64-byte chunks instead, since binary files have no\nnatural concept of lines). This is a more expensive --dirstat\nbehavior than the changes behavior, but it does count rearranged\nlines within a file as much as other changes. The resulting output\nis consistent with what you get from the other --*stat options.\n\n files \n\nCompute the dirstat numbers by counting the number of files changed.\nEach changed file counts equally in the dirstat analysis. This is\nthe computationally cheapest --dirstat behavior, since it does\nnot have to look at the file contents at all.\n\n cumulative \n\nCount changes in a child directory for the parent directory as well.\nNote that when using cumulative, the sum of the percentages\nreported may exceed 100%. The default (non-cumulative) behavior can\nbe specified with the noncumulative parameter.\n\n <limit> \n\nAn integer parameter specifies a cut-off percent (3% by default).\nDirectories contributing less than this percentage of the changes\nare not shown in the output.\n\n\n\n\n\n\nExample: The following will count changed files, while ignoring\ndirectories with less than 10% of the total amount of changed files,\nand accumulating child directory counts in the parent directories:\n--dirstat=files,10,cumulative.",
				"isString": false
			},
			{
				"name": "cumulative",
				"aliases": [],
				"description": "Synonym for --dirstat=cumulative",
				"isString": false
			},
			{
				"name": "dirstat-by-file",
				"aliases": [],
				"description": "Synonym for --dirstat=files,param1,param2…​",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information\nsuch as creations, renames and mode changes.",
				"isString": false
			},
			{
				"name": "patch-with-stat",
				"aliases": [],
				"description": "Synonym for -p --stat.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When --raw, --numstat, --name-only or --name-status has been\ngiven, do not munge pathnames and use NULs as output field terminators.\n\nWithout this option, pathnames with \"unusual\" characters are quoted as\nexplained for the configuration variable core.quotePath (see\ngit-config[1]).",
				"isString": false
			},
			{
				"name": "name-only",
				"aliases": [],
				"description": "Show only names of changed files.",
				"isString": false
			},
			{
				"name": "name-status",
				"aliases": [],
				"description": "Show only names and status of changed files. See the description\nof the --diff-filter option on what the status letters mean.",
				"isString": false
			},
			{
				"name": "submodule",
				"aliases": [],
				"description": "Specify how differences in submodules are shown.  When specifying\n--submodule=short the short format is used.  This format just\nshows the names of the commits at the beginning and end of the range.\nWhen --submodule or --submodule=log is specified, the log\nformat is used.  This format lists the commits in the range like\ngit-submodule[1] summary does.  When --submodule=diff\nis specified, the diff format is used.  This format shows an\ninline diff of the changes in the submodule contents between the\ncommit range.  Defaults to diff.submodule or the short format\nif the config option is unset.",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Show colored diff.\n--color (i.e. without =<when>) is the same as --color=always.\n<when> can be one of always, never, or auto.\nIt can be changed by the color.ui and color.diff\nconfiguration settings.",
				"isString": false
			},
			{
				"name": "no-color",
				"aliases": [],
				"description": "Turn off colored diff.\nThis can be used to override configuration settings.\nIt is the same as --color=never.",
				"isString": false
			},
			{
				"name": "color-moved",
				"aliases": [],
				"description": "Moved lines of code are colored differently.\nIt can be changed by the diff.colorMoved configuration setting.\nThe <mode> defaults to no if the option is not given\nand to zebra if the option with no mode is given.\nThe mode must be one of:\n\n\n\n\n no \n\nMoved lines are not highlighted.\n\n default \n\nIs a synonym for zebra. This may change to a more sensible mode\nin the future.\n\n plain \n\nAny line that is added in one location and was removed\nin another location will be colored with color.diff.newMoved.\nSimilarly color.diff.oldMoved will be used for removed lines\nthat are added somewhere else in the diff. This mode picks up any\nmoved line, but it is not very useful in a review to determine\nif a block of code was moved without permutation.\n\n blocks \n\nBlocks of moved text of at least 20 alphanumeric characters\nare detected greedily. The detected blocks are\npainted using either the color.diff.{old,new}Moved color.\nAdjacent blocks cannot be told apart.\n\n zebra \n\nBlocks of moved text are detected as in blocks mode. The blocks\nare painted using either the color.diff.{old,new}Moved color or\ncolor.diff.{old,new}MovedAlternative. The change between\nthe two colors indicates that a new block was detected.\n\n dimmed-zebra \n\nSimilar to zebra, but additional dimming of uninteresting parts\nof moved code is performed. The bordering lines of two adjacent\nblocks are considered interesting, the rest is uninteresting.\ndimmed_zebra is a deprecated synonym.",
				"isString": false
			},
			{
				"name": "no-color-moved",
				"aliases": [],
				"description": "Turn off move detection. This can be used to override configuration\nsettings. It is the same as --color-moved=no.",
				"isString": false
			},
			{
				"name": "color-moved-ws",
				"aliases": [],
				"description": "This configures how whitespace is ignored when performing the\nmove detection for --color-moved.\nIt can be set by the diff.colorMovedWS configuration setting.\nThese modes can be given as a comma separated list:\n\n\n\n\n no \n\nDo not ignore whitespace when performing move detection.\n\n ignore-space-at-eol \n\nIgnore changes in whitespace at EOL.\n\n ignore-space-change \n\nIgnore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.\n\n ignore-all-space \n\nIgnore whitespace when comparing lines. This ignores differences\neven if one line has whitespace where the other line has none.\n\n allow-indentation-change \n\nInitially ignore any whitespace in the move detection, then\ngroup the moved code blocks only into a block if the change in\nwhitespace is the same per line. This is incompatible with the\nother modes.",
				"isString": false
			},
			{
				"name": "no-color-moved-ws",
				"aliases": [],
				"description": "Do not ignore whitespace when performing move detection. This can be\nused to override configuration settings. It is the same as\n--color-moved-ws=no.",
				"isString": false
			},
			{
				"name": "word-diff",
				"aliases": [],
				"description": "Show a word diff, using the <mode> to delimit changed words.\nBy default, words are delimited by whitespace; see\n--word-diff-regex below.  The <mode> defaults to plain, and\nmust be one of:\n\n\n\n\n color \n\nHighlight changed words using only colors.  Implies --color.\n\n plain \n\nShow words as [-removed-] and {+added+}.  Makes no\nattempts to escape the delimiters if they appear in the input,\nso the output may be ambiguous.\n\n porcelain \n\nUse a special line-based format intended for script\nconsumption.  Added/removed/unchanged runs are printed in the\nusual unified diff format, starting with a +/-/` `\ncharacter at the beginning of the line and extending to the\nend of the line.  Newlines in the input are represented by a\ntilde ~ on a line of its own.\n\n none \n\nDisable word diff again.\n\n\n\n\n\n\nNote that despite the name of the first mode, color is used to\nhighlight the changed parts in all modes if enabled.",
				"isString": false
			},
			{
				"name": "word-diff-regex",
				"aliases": [],
				"description": "Use <regex> to decide what a word is, instead of considering\nruns of non-whitespace to be a word.  Also implies\n--word-diff unless it was already enabled.\n\nEvery non-overlapping match of the\n<regex> is considered a word.  Anything between these matches is\nconsidered whitespace and ignored(!) for the purposes of finding\ndifferences.  You may want to append |[^[:space:]] to your regular\nexpression to make sure that it matches all non-whitespace characters.\nA match that contains a newline is silently truncated(!) at the\nnewline.\n\n\nFor example, --word-diff-regex=. will treat each character as a word\nand, correspondingly, show differences character by character.\n\n\nThe regex can also be set via a diff driver or configuration option, see\ngitattributes[5] or git-config[1].  Giving it explicitly\noverrides any diff driver or configuration setting.  Diff drivers\noverride configuration settings.",
				"isString": false
			},
			{
				"name": "color-words",
				"aliases": [],
				"description": "Equivalent to --word-diff=color plus (if a regex was\nspecified) --word-diff-regex=<regex>.",
				"isString": false
			},
			{
				"name": "no-renames",
				"aliases": [],
				"description": "Turn off rename detection, even when the configuration\nfile gives the default to do so.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Whether to use empty blobs as rename source.",
				"isString": false
			},
			{
				"name": "check",
				"aliases": [],
				"description": "Warn if changes introduce conflict markers or whitespace errors.\nWhat are considered whitespace errors is controlled by core.whitespace\nconfiguration.  By default, trailing whitespaces (including\nlines that consist solely of whitespaces) and a space character\nthat is immediately followed by a tab character inside the\ninitial indent of the line are considered whitespace errors.\nExits with non-zero status if problems are found. Not compatible\nwith --exit-code.",
				"isString": false
			},
			{
				"name": "ws-error-highlight",
				"aliases": [],
				"description": "Highlight whitespace errors in the context, old or new\nlines of the diff.  Multiple values are separated by comma,\nnone resets previous values, default reset the list to\nnew and all is a shorthand for old,new,context.  When\nthis option is not given, and the configuration variable\ndiff.wsErrorHighlight is not set, only whitespace errors in\nnew lines are highlighted. The whitespace errors are colored\nwith color.diff.whitespace.",
				"isString": false
			},
			{
				"name": "full-index",
				"aliases": [],
				"description": "Instead of the first handful of characters, show the full\npre- and post-image blob object names on the \"index\"\nline when generating patch format output.",
				"isString": false
			},
			{
				"name": "binary",
				"aliases": [],
				"description": "In addition to --full-index, output a binary diff that\ncan be applied with git-apply.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nname in diff-raw format output and diff-tree header\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nIn diff-patch output format, --full-index takes higher\nprecedence, i.e. if --full-index is specified, full blob\nnames will be shown regardless of --abbrev.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "break-rewrites",
				"aliases": [
					"B[<n>][/<m>]"
				],
				"description": "Break complete rewrite changes into pairs of delete and\ncreate. This serves two purposes:\n\nIt affects the way a change that amounts to a total rewrite of a file\nnot as a series of deletion and insertion mixed together with a very\nfew lines that happen to match textually as the context, but as a\nsingle deletion of everything old followed by a single insertion of\neverything new, and the number m controls this aspect of the -B\noption (defaults to 60%). -B/70% specifies that less than 30% of the\noriginal should remain in the result for Git to consider it a total\nrewrite (i.e. otherwise the resulting patch will be a series of\ndeletion and insertion mixed together with context lines).\n\n\nWhen used with -M, a totally-rewritten file is also considered as the\nsource of a rename (usually -M only considers a file that disappeared\nas the source of a rename), and the number n controls this aspect of\nthe -B option (defaults to 50%). -B20% specifies that a change with\naddition and deletion compared to 20% or more of the file’s size are\neligible for being picked up as a possible source of a rename to\nanother file.",
				"isString": false
			},
			{
				"name": "find-renames",
				"aliases": [
					"M[<n>]"
				],
				"description": "Detect renames.\nIf n is specified, it is a threshold on the similarity\nindex (i.e. amount of addition/deletions compared to the\nfile’s size). For example, -M90% means Git should consider a\ndelete/add pair to be a rename if more than 90% of the file\nhasn’t changed.  Without a % sign, the number is to be read as\na fraction, with a decimal point before it.  I.e., -M5 becomes\n0.5, and is thus the same as -M50%.  Similarly, -M05 is\nthe same as -M5%.  To limit detection to exact renames, use\n-M100%.  The default similarity index is 50%.",
				"isString": false
			},
			{
				"name": "find-copies",
				"aliases": [
					"C[<n>]"
				],
				"description": "Detect copies as well as renames.  See also --find-copies-harder.\nIf n is specified, it has the same meaning as for -M<n>.",
				"isString": false
			},
			{
				"name": "find-copies-harder",
				"aliases": [],
				"description": "For performance reasons, by default, -C option finds copies only\nif the original file of the copy was modified in the same\nchangeset.  This flag makes the command\ninspect unmodified files as candidates for the source of\ncopy.  This is a very expensive operation for large\nprojects, so use it with caution.  Giving more than one\n-C option has the same effect.",
				"isString": false
			},
			{
				"name": "irreversible-delete",
				"aliases": [
					"D"
				],
				"description": "Omit the preimage for deletes, i.e. print only the header but not\nthe diff between the preimage and /dev/null. The resulting patch\nis not meant to be applied with patch or git apply; this is\nsolely for people who want to just concentrate on reviewing the\ntext after the change. In addition, the output obviously lacks\nenough information to apply such a patch in reverse, even manually,\nhence the name of the option.\n\nWhen used together with -B, omit also the preimage in the deletion part\nof a delete/create pair.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The -M and -C options require O(n^2) processing time where n\nis the number of potential rename/copy targets.  This\noption prevents rename/copy detection from running if\nthe number of rename/copy targets exceeds the specified\nnumber.",
				"isString": false
			},
			{
				"name": "diff-filter",
				"aliases": [],
				"description": "Select only files that are Added (A), Copied (C),\nDeleted (D), Modified (M), Renamed (R), have their\ntype (i.e. regular file, symlink, submodule, …​) changed (T),\nare Unmerged (U), are\nUnknown (X), or have had their pairing Broken (B).\nAny combination of the filter characters (including none) can be used.\nWhen * (All-or-none) is added to the combination, all\npaths are selected if there is any file that matches\nother criteria in the comparison; if there is no file\nthat matches other criteria, nothing is selected.\n\nAlso, these upper-case letters can be downcased to exclude.  E.g.\n--diff-filter=ad excludes added and deleted paths.\n\n\nNote that not all diffs can feature all types. For instance, diffs\nfrom the index to the working tree can never have Added entries\n(because the set of paths included in the diff is limited by what is in\nthe index).  Similarly, copied and renamed entries cannot appear if\ndetection for those types is disabled.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified string (i.e. addition/deletion) in a file.\nIntended for the scripter’s use.\n\nIt is useful when you’re looking for an exact block of code (like a\nstruct), and want to know the history of that block since it first\ncame into being: use the feature iteratively to feed the interesting\nblock in the preimage back into -S, and keep going until you get the\nvery first version of the block.\n\n\nBinary files are searched as well.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences whose patch text contains added/removed\nlines that match <regex>.\n\nTo illustrate the difference between -S<regex> --pickaxe-regex and\n-G<regex>, consider a commit with the following diff in the same\nfile:\n\n\n\n+    return frotz(nitfol, two->ptr, 1, 0);\n...\n-    hit = frotz(nitfol, mf2.ptr, 1, 0);\n\n\n\nWhile git log -G\"frotz\\(nitfol\" will show this commit, git log\n-S\"frotz\\(nitfol\" --pickaxe-regex will not (because the number of\noccurrences of that string did not change).\n\n\nUnless --text is supplied patches of binary files without a textconv\nfilter will be ignored.\n\n\nSee the pickaxe entry in gitdiffcore[7] for more\ninformation.",
				"isString": false
			},
			{
				"name": "find-object",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified object. Similar to -S, just the argument is different\nin that it doesn’t search for a specific string but for a specific\nobject id.\n\nThe object can be a blob or a submodule commit. It implies the -t option in\ngit-log to also find trees.",
				"isString": false
			},
			{
				"name": "pickaxe-all",
				"aliases": [],
				"description": "When -S or -G finds a change, show all the changes in that\nchangeset, not just the files that contain the change\nin <string>.",
				"isString": false
			},
			{
				"name": "pickaxe-regex",
				"aliases": [],
				"description": "Treat the <string> given to -S as an extended POSIX regular\nexpression to match.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Control the order in which files appear in the output.\nThis overrides the diff.orderFile configuration variable\n(see git-config[1]).  To cancel diff.orderFile,\nuse -O/dev/null.\n\nThe output order is determined by the order of glob patterns in\n<orderfile>.\nAll files with pathnames that match the first pattern are output\nfirst, all files with pathnames that match the second pattern (but not\nthe first) are output next, and so on.\nAll files with pathnames that do not match any pattern are output\nlast, as if there was an implicit match-all pattern at the end of the\nfile.\nIf multiple pathnames have the same rank (they match the same pattern\nbut no earlier patterns), their output order relative to each other is\nthe normal order.\n\n\n<orderfile> is parsed as follows:\n\n\n\n\n\n\nBlank lines are ignored, so they can be used as separators for\nreadability.\n\n\nLines starting with a hash (\"#\") are ignored, so they can be used\nfor comments.  Add a backslash (\"\\\") to the beginning of the\npattern if it starts with a hash.\n\n\nEach other line contains a single pattern.\n\n\n\n\n\n\nPatterns have the same syntax and semantics as patterns used for\nfnmatch(3) without the FNM_PATHNAME flag, except a pathname also\nmatches a pattern if removing any number of the final pathname\ncomponents matches the pattern.  For example, the pattern \"foo*bar\"\nmatches \"fooasdfbar\" and \"foo/bar/baz/asdf\" but not \"foobarx\".",
				"isString": false
			},
			{
				"name": "rotate-to",
				"aliases": [
					"skip-to=<file>"
				],
				"description": "Discard the files before the named <file> from the output\n(i.e. skip to), or move them to the end of the output\n(i.e. rotate to).  These were invented primarily for use\nof the git difftool command, and may not be very useful\notherwise.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Swap two inputs; that is, show differences from index or\non-disk file to tree contents.",
				"isString": false
			},
			{
				"name": "relative",
				"aliases": [
					"no-relative"
				],
				"description": "When run from a subdirectory of the project, it can be\ntold to exclude changes outside the directory and show\npathnames relative to it with this option.  When you are\nnot in a subdirectory (e.g. in a bare repository), you\ncan name which subdirectory to make the output relative\nto by giving a <path> as an argument.\n--no-relative can be used to countermand both diff.relative config\noption and previous --relative.",
				"isString": false
			},
			{
				"name": "text",
				"aliases": [
					"a"
				],
				"description": "Treat all files as text.",
				"isString": false
			},
			{
				"name": "ignore-cr-at-eol",
				"aliases": [],
				"description": "Ignore carriage-return at the end of line when doing a comparison.",
				"isString": false
			},
			{
				"name": "ignore-space-at-eol",
				"aliases": [],
				"description": "Ignore changes in whitespace at EOL.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"b"
				],
				"description": "Ignore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.",
				"isString": false
			},
			{
				"name": "ignore-all-space",
				"aliases": [
					"w"
				],
				"description": "Ignore whitespace when comparing lines.  This ignores\ndifferences even if one line has whitespace where the other\nline has none.",
				"isString": false
			},
			{
				"name": "ignore-blank-lines",
				"aliases": [],
				"description": "Ignore changes whose lines are all blank.",
				"isString": false
			},
			{
				"name": "ignore-matching-lines",
				"aliases": [
					"I<regex>"
				],
				"description": "Ignore changes whose all lines match <regex>.  This option may\nbe specified more than once.",
				"isString": false
			},
			{
				"name": "inter-hunk-context",
				"aliases": [],
				"description": "Show the context between diff hunks, up to the specified number\nof lines, thereby fusing hunks that are close to each other.\nDefaults to diff.interHunkContext or 0 if the config option\nis unset.",
				"isString": false
			},
			{
				"name": "function-context",
				"aliases": [
					"W"
				],
				"description": "Show whole function as context lines for each change.\nThe function names are determined in the same way as\ngit diff works out patch hunk headers (see Defining a\ncustom hunk-header in gitattributes[5]).",
				"isString": false
			},
			{
				"name": "exit-code",
				"aliases": [],
				"description": "Make the program exit with codes similar to diff(1).\nThat is, it exits with 1 if there were differences and\n0 means no differences.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Disable all output of the program. Implies --exit-code.",
				"isString": false
			},
			{
				"name": "ext-diff",
				"aliases": [],
				"description": "Allow an external diff helper to be executed. If you set an\nexternal diff driver with gitattributes[5], you need\nto use this option with git-log[1] and friends.",
				"isString": false
			},
			{
				"name": "no-ext-diff",
				"aliases": [],
				"description": "Disallow external diff drivers.",
				"isString": false
			},
			{
				"name": "no-textconv",
				"aliases": [
					"textconv"
				],
				"description": "Allow (or disallow) external text conversion filters to be run\nwhen comparing binary files. See gitattributes[5] for\ndetails. Because textconv filters are typically a one-way\nconversion, the resulting diff is suitable for human\nconsumption, but cannot be applied. For this reason, textconv\nfilters are enabled by default only for git-diff[1] and\ngit-log[1], but not for git-format-patch[1] or\ndiff plumbing commands.",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Ignore changes to submodules in the diff generation. <when> can be\neither \"none\", \"untracked\", \"dirty\" or \"all\", which is the default.\nUsing \"none\" will consider the submodule modified when it either contains\nuntracked or modified files or its HEAD differs from the commit recorded\nin the superproject and can be used to override any settings of the\nignore option in git-config[1] or gitmodules[5]. When\n\"untracked\" is used submodules are not considered dirty when they only\ncontain untracked content (but they are still scanned for modified\ncontent). Using \"dirty\" ignores all changes to the work tree of submodules,\nonly changes to the commits stored in the superproject are shown (this was\nthe behavior until 1.7.0). Using \"all\" hides all changes to submodules.",
				"isString": false
			},
			{
				"name": "src-prefix",
				"aliases": [],
				"description": "Show the given source prefix instead of \"a/\".",
				"isString": false
			},
			{
				"name": "dst-prefix",
				"aliases": [],
				"description": "Show the given destination prefix instead of \"b/\".",
				"isString": false
			},
			{
				"name": "no-prefix",
				"aliases": [],
				"description": "Do not show any source or destination prefix.",
				"isString": false
			},
			{
				"name": "line-prefix",
				"aliases": [],
				"description": "Prepend an additional prefix to every line of output.",
				"isString": false
			},
			{
				"name": "ita-invisible-in-index",
				"aliases": [],
				"description": "By default entries added by \"git add -N\" appear as an existing\nempty file in \"git diff\" and a new file in \"git diff --cached\".\nThis option makes the entry appear as a new file in \"git diff\"\nand non-existent in \"git diff --cached\". This option could be\nreverted with --ita-visible-in-index. Both options are\nexperimental and could be removed in future.",
				"isString": false
			}
		]
	},
	{
		"name": "commit",
		"description": "Record changes to the repository",
		"flags": [
			{
				"name": "all",
				"aliases": [
					"a"
				],
				"description": "Tell the command to automatically stage files that have\nbeen modified and deleted, but new files you have not\ntold Git about are not affected.",
				"isString": false
			},
			{
				"name": "patch",
				"aliases": [
					"p"
				],
				"description": "Use the interactive patch selection interface to chose\nwhich changes to commit. See git-add[1] for\ndetails.",
				"isString": false
			},
			{
				"name": "reuse-message",
				"aliases": [
					"C"
				],
				"description": "Take an existing commit object, and reuse the log message\nand the authorship information (including the timestamp)\nwhen creating the commit.",
				"isString": false
			},
			{
				"name": "reedit-message",
				"aliases": [
					"c"
				],
				"description": "Like -C, but with -c the editor is invoked, so that\nthe user can further edit the commit message.",
				"isString": false
			},
			{
				"name": "fixup",
				"aliases": [],
				"description": "Construct a commit message for use with rebase --autosquash.\nThe commit message will be the subject line from the specified\ncommit with a prefix of \"fixup! \".  See git-rebase[1]\nfor details.",
				"isString": false
			},
			{
				"name": "squash",
				"aliases": [],
				"description": "Construct a commit message for use with rebase --autosquash.\nThe commit message subject line is taken from the specified\ncommit with a prefix of \"squash! \".  Can be used with additional\ncommit message options (-m/-c/-C/-F). See\ngit-rebase[1] for details.",
				"isString": false
			},
			{
				"name": "reset-author",
				"aliases": [],
				"description": "When used with -C/-c/--amend options, or when committing after a\nconflicting cherry-pick, declare that the authorship of the\nresulting commit now belongs to the committer. This also renews\nthe author timestamp.",
				"isString": false
			},
			{
				"name": "short",
				"aliases": [],
				"description": "When doing a dry-run, give the output in the short-format. See\ngit-status[1] for details. Implies --dry-run.",
				"isString": false
			},
			{
				"name": "branch",
				"aliases": [],
				"description": "Show the branch and tracking info even in short-format.",
				"isString": false
			},
			{
				"name": "porcelain",
				"aliases": [],
				"description": "When doing a dry-run, give the output in a porcelain-ready\nformat. See git-status[1] for details. Implies\n--dry-run.",
				"isString": false
			},
			{
				"name": "long",
				"aliases": [],
				"description": "When doing a dry-run, give the output in the long-format.\nImplies --dry-run.",
				"isString": false
			},
			{
				"name": "null",
				"aliases": [
					"z"
				],
				"description": "When showing short or porcelain status output, print the\nfilename verbatim and terminate the entries with NUL, instead of LF.\nIf no format is given, implies the --porcelain output format.\nWithout the -z option, filenames with \"unusual\" characters are\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]).",
				"isString": false
			},
			{
				"name": "file",
				"aliases": [
					"F"
				],
				"description": "Take the commit message from the given file.  Use - to\nread the message from the standard input.",
				"isString": false
			},
			{
				"name": "author",
				"aliases": [],
				"description": "Override the commit author. Specify an explicit author using the\nstandard A U Thor <author@example.com> format. Otherwise <author>\nis assumed to be a pattern and is used to search for an existing\ncommit by that author (i.e. rev-list --all -i --author=<author>);\nthe commit author is then copied from the first such commit found.",
				"isString": false
			},
			{
				"name": "date",
				"aliases": [],
				"description": "Override the author date used in the commit.",
				"isString": false
			},
			{
				"name": "message",
				"aliases": [
					"m"
				],
				"description": "Use the given <msg> as the commit message.\nIf multiple -m options are given, their values are\nconcatenated as separate paragraphs.\n\nThe -m option is mutually exclusive with -c, -C, and -F.",
				"isString": false
			},
			{
				"name": "template",
				"aliases": [
					"t"
				],
				"description": "When editing the commit message, start the editor with the\ncontents in the given file.  The commit.template configuration\nvariable is often used to give this option implicitly to the\ncommand.  This mechanism can be used by projects that want to\nguide participants with some hints on what to write in the message\nin what order.  If the user exits the editor without editing the\nmessage, the commit is aborted.  This has no effect when a message\nis given by other means, e.g. with the -m or -F options.",
				"isString": false
			},
			{
				"name": "no-signoff",
				"aliases": [
					"s",
					"signoff"
				],
				"description": "Add a Signed-off-by trailer by the committer at the end of the commit\nlog message.  The meaning of a signoff depends on the project\nto which you’re committing.  For example, it may certify that\nthe committer has the rights to submit the work under the\nproject’s license or agrees to some contributor representation,\nsuch as a Developer Certificate of Origin.\n(See http://developercertificate.org for the one used by the\nLinux kernel and Git projects.)  Consult the documentation or\nleadership of the project to which you’re contributing to\nunderstand how the signoffs are used in that project.\n\nThe --no-signoff option can be used to countermand an earlier --signoff\noption on the command line.",
				"isString": false
			},
			{
				"name": "no-verify",
				"aliases": [
					"n"
				],
				"description": "This option bypasses the pre-commit and commit-msg hooks.\nSee also githooks[5].",
				"isString": false
			},
			{
				"name": "allow-empty",
				"aliases": [],
				"description": "Usually recording a commit that has the exact same tree as its\nsole parent commit is a mistake, and the command prevents you\nfrom making such a commit.  This option bypasses the safety, and\nis primarily for use by foreign SCM interface scripts.",
				"isString": false
			},
			{
				"name": "allow-empty-message",
				"aliases": [],
				"description": "Like --allow-empty this command is primarily for use by foreign\nSCM interface scripts. It allows you to create a commit with an\nempty commit message without using plumbing commands like\ngit-commit-tree[1].",
				"isString": false
			},
			{
				"name": "cleanup",
				"aliases": [],
				"description": "This option determines how the supplied commit message should be\ncleaned up before committing.  The <mode> can be strip,\nwhitespace, verbatim, scissors or default.\n\n\n\n\n strip \n\nStrip leading and trailing empty lines, trailing whitespace,\ncommentary and collapse consecutive empty lines.\n\n whitespace \n\nSame as strip except #commentary is not removed.\n\n verbatim \n\nDo not change the message at all.\n\n scissors \n\nSame as whitespace except that everything from (and including)\nthe line found below is truncated, if the message is to be edited.\n\"#\" can be customized with core.commentChar.\n\n\n# ------------------------ >8 ------------------------\n\n\n\n default \n\nSame as strip if the message is to be edited.\nOtherwise whitespace.\n\n\n\n\n\n\nThe default can be changed by the commit.cleanup configuration\nvariable (see git-config[1]).",
				"isString": false
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "The message taken from file with -F, command line with\n-m, and from commit object with -C are usually used as\nthe commit log message unmodified. This option lets you\nfurther edit the message taken from these sources.",
				"isString": false
			},
			{
				"name": "no-edit",
				"aliases": [],
				"description": "Use the selected commit message without launching an editor.\nFor example, git commit --amend --no-edit amends a commit\nwithout changing its commit message.",
				"isString": false
			},
			{
				"name": "amend",
				"aliases": [],
				"description": "Replace the tip of the current branch by creating a new\ncommit. The recorded tree is prepared as usual (including\nthe effect of the -i and -o options and explicit\npathspec), and the message from the original commit is used\nas the starting point, instead of an empty message, when no\nother message is specified from the command line via options\nsuch as -m, -F, -c, etc.  The new commit has the same\nparents and author as the current one (the --reset-author\noption can countermand this).\n\n\n\nIt is a rough equivalent for:\n\n\n\n\t$ git reset --soft HEAD^\n\t$ ... do something else to come up with the right tree ...\n\t$ git commit -c ORIG_HEAD\n\n\n\nbut can be used to amend a merge commit.\n\n\n\n\nYou should understand the implications of rewriting history if you\namend a commit that has already been published.  (See the \"RECOVERING\nFROM UPSTREAM REBASE\" section in git-rebase[1].)",
				"isString": false
			},
			{
				"name": "no-post-rewrite",
				"aliases": [],
				"description": "Bypass the post-rewrite hook.",
				"isString": false
			},
			{
				"name": "include",
				"aliases": [
					"i"
				],
				"description": "Before making a commit out of staged contents so far,\nstage the contents of paths given on the command line\nas well.  This is usually not what you want unless you\nare concluding a conflicted merge.",
				"isString": false
			},
			{
				"name": "only",
				"aliases": [
					"o"
				],
				"description": "Make a commit by taking the updated working tree contents\nof the paths specified on the\ncommand line, disregarding any contents that have been\nstaged for other paths. This is the default mode of operation of\ngit commit if any paths are given on the command line,\nin which case this option can be omitted.\nIf this option is specified together with --amend, then\nno paths need to be specified, which can be used to amend\nthe last commit without committing changes that have\nalready been staged. If used together with --allow-empty\npaths are also not required, and an empty commit will be created.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "Pathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "Only meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			},
			{
				"name": "untracked-files",
				"aliases": [
					"u[<mode>]"
				],
				"description": "Show untracked files.\n\n\n\nThe mode parameter is optional (defaults to all), and is used to\nspecify the handling of untracked files; when -u is not used, the\ndefault is normal, i.e. show untracked files and directories.\n\n\nThe possible options are:\n\n\n\n\nno     - Show no untracked files\n\n\nnormal - Shows untracked files and directories\n\n\nall    - Also shows individual files in untracked directories.\n\n\n\n\nThe default can be changed using the status.showUntrackedFiles\nconfiguration variable documented in git-config[1].",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Show unified diff between the HEAD commit and what\nwould be committed at the bottom of the commit message\ntemplate to help the user describe the commit by reminding\nwhat changes the commit has.\nNote that this diff output doesn’t have its\nlines prefixed with #. This diff will not be a part\nof the commit message. See the commit.verbose configuration\nvariable in git-config[1].\n\nIf specified twice, show in addition the unified diff between\nwhat would be committed and the worktree files, i.e. the unstaged\nchanges to tracked files.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Suppress commit summary message.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [],
				"description": "Do not create a commit, but show a list of paths that are\nto be committed, paths with local changes that will be left\nuncommitted and paths that are untracked.",
				"isString": false
			},
			{
				"name": "status",
				"aliases": [],
				"description": "Include the output of git-status[1] in the commit\nmessage template when using an editor to prepare the commit\nmessage.  Defaults to on, but can be used to override\nconfiguration variable commit.status.",
				"isString": false
			},
			{
				"name": "no-status",
				"aliases": [],
				"description": "Do not include the output of git-status[1] in the\ncommit message template when using an editor to prepare the\ndefault commit message.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign commits. The keyid argument is optional and\ndefaults to the committer identity; if specified, it must be\nstuck to the option without a space. --no-gpg-sign is useful to\ncountermand both commit.gpgSign configuration variable, and\nearlier --gpg-sign.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "When pathspec is given on the command line, commit the contents of\nthe files that match the pathspec without recording the changes\nalready added to the index. The contents of these files are also\nstaged for the next commit on top of what have been staged before.\n\nFor more details, see the pathspec entry in gitglossary[7].",
				"isString": true
			}
		]
	},
	{
		"name": "notes",
		"description": "Add or inspect object notes",
		"flags": [
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "When adding notes to an object that already has notes,\noverwrite the existing notes (instead of aborting).",
				"isString": false
			},
			{
				"name": "message",
				"aliases": [
					"m"
				],
				"description": "Use the given note message (instead of prompting).\nIf multiple -m options are given, their values\nare concatenated as separate paragraphs.\nLines starting with # and empty lines other than a\nsingle line between paragraphs will be stripped out.",
				"isString": false
			},
			{
				"name": "file",
				"aliases": [
					"F"
				],
				"description": "Take the note message from the given file.  Use - to\nread the note message from the standard input.\nLines starting with # and empty lines other than a\nsingle line between paragraphs will be stripped out.",
				"isString": false
			},
			{
				"name": "reuse-message",
				"aliases": [
					"C"
				],
				"description": "Take the given blob object (for example, another note) as the\nnote message. (Use git notes copy <object> instead to\ncopy notes between objects.)",
				"isString": false
			},
			{
				"name": "reedit-message",
				"aliases": [
					"c"
				],
				"description": "Like -C, but with -c the editor is invoked, so that\nthe user can further edit the note message.",
				"isString": false
			},
			{
				"name": "allow-empty",
				"aliases": [],
				"description": "Allow an empty note object to be stored. The default behavior is\nto automatically remove empty notes.",
				"isString": false
			},
			{
				"name": "ref",
				"aliases": [],
				"description": "Manipulate the notes tree in <ref>.  This overrides\nGIT_NOTES_REF and the \"core.notesRef\" configuration.  The ref\nspecifies the full refname when it begins with refs/notes/; when it\nbegins with notes/, refs/ and otherwise refs/notes/ is prefixed\nto form a full name of the ref.",
				"isString": false
			},
			{
				"name": "ignore-missing",
				"aliases": [],
				"description": "Do not consider it an error to request removing notes from an\nobject that does not have notes attached to it.",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "Also read the object names to remove notes from the standard\ninput (there is no reason you cannot combine this with object\nnames from the command line).",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Do not remove anything; just report the object names whose notes\nwould be removed.",
				"isString": false
			},
			{
				"name": "strategy",
				"aliases": [
					"s"
				],
				"description": "When merging notes, resolve notes conflicts using the given\nstrategy. The following strategies are recognized: \"manual\"\n(default), \"ours\", \"theirs\", \"union\" and \"cat_sort_uniq\".\nThis option overrides the \"notes.mergeStrategy\" configuration setting.\nSee the \"NOTES MERGE STRATEGIES\" section below for more\ninformation on each notes merge strategy.",
				"isString": false
			},
			{
				"name": "commit",
				"aliases": [],
				"description": "Finalize an in-progress git notes merge. Use this option\nwhen you have resolved the conflicts that git notes merge\nstored in .git/NOTES_MERGE_WORKTREE. This amends the partial\nmerge commit created by git notes merge (stored in\n.git/NOTES_MERGE_PARTIAL) by adding the notes in\n.git/NOTES_MERGE_WORKTREE. The notes ref stored in the\n.git/NOTES_MERGE_REF symref is updated to the resulting commit.",
				"isString": false
			},
			{
				"name": "abort",
				"aliases": [],
				"description": "Abort/reset an in-progress git notes merge, i.e. a notes merge\nwith conflicts. This simply removes all files related to the\nnotes merge.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "When merging notes, operate quietly.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "When merging notes, be more verbose.\nWhen pruning notes, report all object names whose notes are\nremoved.",
				"isString": false
			}
		]
	},
	{
		"name": "restore",
		"description": "Restore working tree files",
		"flags": [
			{
				"name": "source",
				"aliases": [
					"s"
				],
				"description": "Restore the working tree files with the content from the given\ntree. It is common to specify the source tree by naming a\ncommit, branch or tag associated with it.\n\nIf not specified, the contents are restored from HEAD if --staged is\ngiven, otherwise from the index.\n\n\nAs a special case, you may use \"A...B\" as a shortcut for the\nmerge base of A and B if there is exactly one merge base. You can\nleave out at most one of A and B, in which case it defaults to HEAD.",
				"isString": false
			},
			{
				"name": "patch",
				"aliases": [
					"p"
				],
				"description": "Interactively select hunks in the difference between the\nrestore source and the restore location. See the “Interactive\nMode” section of git-add[1] to learn how to operate\nthe --patch mode.\n\nNote that --patch can accept no pathspec and will prompt to restore\nall modified paths.",
				"isString": false
			},
			{
				"name": "worktree",
				"aliases": [
					"W",
					"S",
					"staged"
				],
				"description": "Specify the restore location. If neither option is specified,\nby default the working tree is restored. Specifying --staged\nwill only restore the index. Specifying both restores both.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Quiet, suppress feedback messages. Implies --no-progress.",
				"isString": false
			},
			{
				"name": "no-progress",
				"aliases": [
					"progress"
				],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless --quiet\nis specified. This flag enables progress reporting even if not\nattached to a terminal, regardless of --quiet.",
				"isString": false
			},
			{
				"name": "theirs",
				"aliases": [
					"ours"
				],
				"description": "When restoring files in the working tree from the index, use\nstage #2 (ours) or #3 (theirs) for unmerged paths.\n\nNote that during git rebase and git pull --rebase, ours and\ntheirs may appear swapped. See the explanation of the same options\nin git-checkout[1] for details.",
				"isString": false
			},
			{
				"name": "merge",
				"aliases": [
					"m"
				],
				"description": "When restoring files on the working tree from the index,\nrecreate the conflicted merge in the unmerged paths.",
				"isString": false
			},
			{
				"name": "conflict",
				"aliases": [],
				"description": "The same as --merge option above, but changes the way the\nconflicting hunks are presented, overriding the\nmerge.conflictStyle configuration variable.  Possible values\nare \"merge\" (default) and \"diff3\" (in addition to what is\nshown by \"merge\" style, shows the original contents).",
				"isString": false
			},
			{
				"name": "ignore-unmerged",
				"aliases": [],
				"description": "When restoring files on the working tree from the index, do\nnot abort the operation if there are unmerged entries and\nneither --ours, --theirs, --merge or --conflict is\nspecified. Unmerged paths on the working tree are left alone.",
				"isString": false
			},
			{
				"name": "ignore-skip-worktree-bits",
				"aliases": [],
				"description": "In sparse checkout mode, by default is to only update entries\nmatched by <pathspec> and sparse patterns in\n$GIT_DIR/info/sparse-checkout. This option ignores the sparse\npatterns and unconditionally restores any files in\n<pathspec>.",
				"isString": false
			},
			{
				"name": "no-recurse-submodules",
				"aliases": [
					"recurse-submodules"
				],
				"description": "If <pathspec> names an active submodule and the restore location\nincludes the working tree, the submodule will only be updated if\nthis option is given, in which case its working tree will be\nrestored to the commit recorded in the superproject, and any local\nmodifications overwritten. If nothing (or\n--no-recurse-submodules) is used, submodules working trees will\nnot be updated. Just like git-checkout[1], this will detach\nHEAD of the submodule.",
				"isString": false
			},
			{
				"name": "no-overlay",
				"aliases": [
					"overlay"
				],
				"description": "In overlay mode, the command never removes files when\nrestoring. In no-overlay mode, tracked files that do not\nappear in the --source tree are removed, to make them match\n<tree> exactly. The default is no-overlay mode.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "Pathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "Only meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "Limits the paths affected by the operation.\n\nFor more details, see the pathspec entry in gitglossary[7].",
				"isString": true
			}
		]
	},
	{
		"name": "reset",
		"description": "Reset current HEAD to the specified state",
		"flags": [
			{
				"name": "no-quiet",
				"aliases": [
					"q",
					"quiet"
				],
				"description": "Be quiet, only report errors. The default behavior is set by the\nreset.quiet config option. --quiet and --no-quiet will\noverride the default behavior.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "Pathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "Only meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "Limits the paths affected by the operation.\n\nFor more details, see the pathspec entry in gitglossary[7].",
				"isString": true
			}
		]
	},
	{
		"name": "rm",
		"description": "Remove files from the working tree and from the index",
		"flags": [
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "Files to remove.  A leading directory name (e.g. dir to remove\ndir/file1 and dir/file2) can be given to remove all files in\nthe directory, and recursively all sub-directories, but this\nrequires the -r option to be explicitly given.\n\nThe command removes only the paths that are known to Git.\n\n\nFile globbing matches across directory boundaries.  Thus, given two\ndirectories d and d2, there is a difference between using\ngit rm 'd*' and git rm 'd/*', as the former will also remove all\nof directory d2.\n\n\nFor more details, see the pathspec entry in gitglossary[7].",
				"isString": true
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "Override the up-to-date check.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Don’t actually remove any file(s).  Instead, just show\nif they exist in the index and would otherwise be removed\nby the command.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Allow recursive removal when a leading directory name is\ngiven.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This option can be used to separate command-line options from\nthe list of files, (useful when filenames might be mistaken\nfor command-line options).",
				"isString": false
			},
			{
				"name": "cached",
				"aliases": [],
				"description": "Use this option to unstage and remove paths only from the index.\nWorking tree files, whether modified or not, will be\nleft alone.",
				"isString": false
			},
			{
				"name": "ignore-unmatch",
				"aliases": [],
				"description": "Exit with a zero status even if no files matched.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "git rm normally outputs one line (in the form of an rm command)\nfor each file removed. This option suppresses that output.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "Pathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "Only meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			}
		]
	},
	{
		"name": "mv",
		"description": "Move or rename a file, a directory, or a symlink",
		"flags": [
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "Force renaming or moving of a file even if the target exists",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Skip move or rename actions which would lead to an error\ncondition. An error happens when a source is neither existing nor\ncontrolled by Git, or when it would overwrite an existing\nfile unless -f is given.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Do nothing; only show what would happen",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Report the names of files as they are moved.",
				"isString": false
			}
		]
	},
	{
		"name": "branch",
		"description": "List, create, or delete branches",
		"flags": [
			{
				"name": "delete",
				"aliases": [
					"d"
				],
				"description": "Delete a branch. The branch must be fully merged in its\nupstream branch, or in HEAD if no upstream was set with\n--track or --set-upstream-to.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Shortcut for --delete --force.",
				"isString": false
			},
			{
				"name": "create-reflog",
				"aliases": [],
				"description": "Create the branch’s reflog.  This activates recording of\nall changes made to the branch ref, enabling use of date\nbased sha1 expressions such as \"<branchname>@{yesterday}\".\nNote that in non-bare repositories, reflogs are usually\nenabled by default by the core.logAllRefUpdates config option.\nThe negated form --no-create-reflog only overrides an earlier\n--create-reflog, but currently does not negate the setting of\ncore.logAllRefUpdates.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "Reset <branchname> to <startpoint>, even if <branchname> exists\nalready. Without -f, git branch refuses to change an existing branch.\nIn combination with -d (or --delete), allow deleting the\nbranch irrespective of its merged status. In combination with\n-m (or --move), allow renaming the branch even if the new\nbranch name already exists, the same applies for -c (or --copy).",
				"isString": false
			},
			{
				"name": "move",
				"aliases": [
					"m"
				],
				"description": "Move/rename a branch and the corresponding reflog.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Shortcut for --move --force.",
				"isString": false
			},
			{
				"name": "copy",
				"aliases": [
					"c"
				],
				"description": "Copy a branch and the corresponding reflog.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Shortcut for --copy --force.",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Color branches to highlight current, local, and\nremote-tracking branches.\nThe value must be always (the default), never, or auto.",
				"isString": false
			},
			{
				"name": "no-color",
				"aliases": [],
				"description": "Turn off branch colors, even when the configuration file gives the\ndefault to color output.\nSame as --color=never.",
				"isString": false
			},
			{
				"name": "ignore-case",
				"aliases": [
					"i"
				],
				"description": "Sorting and filtering branches are case insensitive.",
				"isString": false
			},
			{
				"name": "column",
				"aliases": [
					"no-column"
				],
				"description": "Display branch listing in columns. See configuration variable\ncolumn.branch for option syntax. --column and --no-column\nwithout options are equivalent to always and never respectively.\n\nThis option is only applicable in non-verbose mode.",
				"isString": false
			},
			{
				"name": "remotes",
				"aliases": [
					"r"
				],
				"description": "List or delete (if used with -d) the remote-tracking branches.\nCombine with --list to match the optional pattern(s).",
				"isString": false
			},
			{
				"name": "all",
				"aliases": [
					"a"
				],
				"description": "List both remote-tracking branches and local branches.\nCombine with --list to match optional pattern(s).",
				"isString": false
			},
			{
				"name": "list",
				"aliases": [
					"l"
				],
				"description": "List branches.  With optional <pattern>..., e.g. git\nbranch --list 'maint-*', list only the branches that match\nthe pattern(s).",
				"isString": false
			},
			{
				"name": "show-current",
				"aliases": [],
				"description": "Print the name of the current branch. In detached HEAD state,\nnothing is printed.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v",
					"vv"
				],
				"description": "When in list mode,\nshow sha1 and commit subject line for each head, along with\nrelationship to upstream branch (if any). If given twice, print\nthe path of the linked worktree (if any) and the name of the upstream\nbranch, as well (see also git remote show <remote>).  Note that the\ncurrent worktree’s HEAD will not have its path printed (it will always\nbe your current directory).",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Be more quiet when creating or deleting a branch, suppressing\nnon-error messages.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "In the verbose listing that show the commit object name,\nshow the shortest prefix that is at least <n> hexdigits\nlong that uniquely refers the object.\nThe default value is 7 and can be overridden by the core.abbrev\nconfig option.",
				"isString": false
			},
			{
				"name": "no-abbrev",
				"aliases": [],
				"description": "Display the full sha1s in the output listing rather than abbreviating them.",
				"isString": false
			},
			{
				"name": "track",
				"aliases": [
					"t"
				],
				"description": "When creating a new branch, set up branch.<name>.remote and\nbranch.<name>.merge configuration entries to mark the\nstart-point branch as \"upstream\" from the new branch. This\nconfiguration will tell git to show the relationship between the\ntwo branches in git status and git branch -v. Furthermore,\nit directs git pull without arguments to pull from the\nupstream when the new branch is checked out.\n\nThis behavior is the default when the start point is a remote-tracking branch.\nSet the branch.autoSetupMerge configuration variable to false if you\nwant git switch, git checkout and git branch to always behave as if --no-track\nwere given. Set it to always if you want this behavior when the\nstart-point is either a local or remote-tracking branch.",
				"isString": false
			},
			{
				"name": "no-track",
				"aliases": [],
				"description": "Do not set up \"upstream\" configuration, even if the\nbranch.autoSetupMerge configuration variable is true.",
				"isString": false
			},
			{
				"name": "set-upstream",
				"aliases": [],
				"description": "As this option had confusing syntax, it is no longer supported.\nPlease use --track or --set-upstream-to instead.",
				"isString": false
			},
			{
				"name": "set-upstream-to",
				"aliases": [
					"u"
				],
				"description": "Set up <branchname>'s tracking information so <upstream> is\nconsidered <branchname>'s upstream branch. If no <branchname>\nis specified, then it defaults to the current branch.",
				"isString": false
			},
			{
				"name": "unset-upstream",
				"aliases": [],
				"description": "Remove the upstream information for <branchname>. If no branch\nis specified it defaults to the current branch.",
				"isString": false
			},
			{
				"name": "edit-description",
				"aliases": [],
				"description": "Open an editor and edit the text to explain what the branch is\nfor, to be used by various other commands (e.g. format-patch,\nrequest-pull, and merge (if enabled)). Multi-line explanations\nmay be used.",
				"isString": false
			},
			{
				"name": "contains",
				"aliases": [],
				"description": "Only list branches which contain the specified commit (HEAD\nif not specified). Implies --list.",
				"isString": false
			},
			{
				"name": "no-contains",
				"aliases": [],
				"description": "Only list branches which don’t contain the specified commit\n(HEAD if not specified). Implies --list.",
				"isString": false
			},
			{
				"name": "merged",
				"aliases": [],
				"description": "Only list branches whose tips are reachable from the\nspecified commit (HEAD if not specified). Implies --list.",
				"isString": false
			},
			{
				"name": "no-merged",
				"aliases": [],
				"description": "Only list branches whose tips are not reachable from the\nspecified commit (HEAD if not specified). Implies --list.",
				"isString": false
			},
			{
				"name": "<branchname>",
				"aliases": [],
				"description": "The name of the branch to create or delete.\nThe new branch name must pass all checks defined by\ngit-check-ref-format[1].  Some of these checks\nmay restrict the characters allowed in a branch name.",
				"isString": true
			},
			{
				"name": "<start-point>",
				"aliases": [],
				"description": "The new branch head will point to this commit.  It may be\ngiven as a branch name, a commit-id, or a tag.  If this\noption is omitted, the current HEAD will be used instead.",
				"isString": true
			},
			{
				"name": "<oldbranch>",
				"aliases": [],
				"description": "The name of an existing branch to rename.",
				"isString": true
			},
			{
				"name": "<newbranch>",
				"aliases": [],
				"description": "The new name for an existing branch. The same restrictions as for\n<branchname> apply.",
				"isString": true
			},
			{
				"name": "sort",
				"aliases": [],
				"description": "Sort based on the key given. Prefix - to sort in descending\norder of the value. You may use the --sort=<key> option\nmultiple times, in which case the last key becomes the primary\nkey. The keys supported are the same as those in git\nfor-each-ref. Sort order defaults to the value configured for the\nbranch.sort variable if exists, or to sorting based on the\nfull refname (including refs/... prefix). This lists\ndetached HEAD (if present) first, then local branches and\nfinally remote-tracking branches. See git-config[1].",
				"isString": false
			},
			{
				"name": "points-at",
				"aliases": [],
				"description": "Only list branches of the given object.",
				"isString": false
			},
			{
				"name": "format",
				"aliases": [],
				"description": "A string that interpolates %(fieldname) from a branch ref being shown\nand the object it points at.  The format is the same as\nthat of git-for-each-ref[1].",
				"isString": false
			}
		]
	},
	{
		"name": "checkout",
		"description": "Switch branches or restore working tree files",
		"flags": [
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Quiet, suppress feedback messages.",
				"isString": false
			},
			{
				"name": "no-progress",
				"aliases": [
					"progress"
				],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless --quiet\nis specified. This flag enables progress reporting even if not\nattached to a terminal, regardless of --quiet.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "When switching branches, proceed even if the index or the\nworking tree differs from HEAD.  This is used to throw away\nlocal changes.\n\nWhen checking out paths from the index, do not fail upon unmerged\nentries; instead, unmerged entries are ignored.",
				"isString": false
			},
			{
				"name": "theirs",
				"aliases": [
					"ours"
				],
				"description": "When checking out paths from the index, check out stage #2\n(ours) or #3 (theirs) for unmerged paths.\n\nNote that during git rebase and git pull --rebase, ours and\ntheirs may appear swapped; --ours gives the version from the\nbranch the changes are rebased onto, while --theirs gives the\nversion from the branch that holds your work that is being rebased.\n\n\nThis is because rebase is used in a workflow that treats the\nhistory at the remote as the shared canonical one, and treats the\nwork done on the branch you are rebasing as the third-party work to\nbe integrated, and you are temporarily assuming the role of the\nkeeper of the canonical history during the rebase.  As the keeper of\nthe canonical history, you need to view the history from the remote\nas ours (i.e. \"our shared canonical history\"), while what you did\non your side branch as theirs (i.e. \"one contributor’s work on top\nof it\").",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Create a new branch named <new_branch> and start it at\n<start_point>; see git-branch[1] for details.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Creates the branch <new_branch> and start it at <start_point>;\nif it already exists, then reset it to <start_point>. This is\nequivalent to running \"git branch\" with \"-f\"; see\ngit-branch[1] for details.",
				"isString": false
			},
			{
				"name": "track",
				"aliases": [
					"t"
				],
				"description": "When creating a new branch, set up \"upstream\" configuration. See\n\"--track\" in git-branch[1] for details.\n\nIf no -b option is given, the name of the new branch will be\nderived from the remote-tracking branch, by looking at the local part of\nthe refspec configured for the corresponding remote, and then stripping\nthe initial part up to the \"*\".\nThis would tell us to use hack as the local branch when branching\noff of origin/hack (or remotes/origin/hack, or even\nrefs/remotes/origin/hack).  If the given name has no slash, or the above\nguessing results in an empty name, the guessing is aborted.  You can\nexplicitly give a name with -b in such a case.",
				"isString": false
			},
			{
				"name": "no-track",
				"aliases": [],
				"description": "Do not set up \"upstream\" configuration, even if the\nbranch.autoSetupMerge configuration variable is true.",
				"isString": false
			},
			{
				"name": "no-guess",
				"aliases": [
					"guess"
				],
				"description": "If <branch> is not found but there does exist a tracking\nbranch in exactly one remote (call it <remote>) with a\nmatching name, treat as equivalent to\n\n\n$ git checkout -b <branch> --track <remote>/<branch>\n\n\n\nIf the branch exists in multiple remotes and one of them is named by\nthe checkout.defaultRemote configuration variable, we’ll use that\none for the purposes of disambiguation, even if the <branch> isn’t\nunique across all remotes. Set it to\ne.g. checkout.defaultRemote=origin to always checkout remote\nbranches from there if <branch> is ambiguous but exists on the\norigin remote. See also checkout.defaultRemote in\ngit-config[1].\n\n\n--guess is the default behavior. Use --no-guess to disable it.\n\n\nThe default behavior can be set via the checkout.guess configuration\nvariable.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Create the new branch’s reflog; see git-branch[1] for\ndetails.",
				"isString": false
			},
			{
				"name": "detach",
				"aliases": [
					"d"
				],
				"description": "Rather than checking out a branch to work on it, check out a\ncommit for inspection and discardable experiments.\nThis is the default behavior of git checkout <commit> when\n<commit> is not a branch name.  See the \"DETACHED HEAD\" section\nbelow for details.",
				"isString": false
			},
			{
				"name": "orphan",
				"aliases": [],
				"description": "Create a new orphan branch, named <new_branch>, started from\n<start_point> and switch to it.  The first commit made on this\nnew branch will have no parents and it will be the root of a new\nhistory totally disconnected from all the other branches and\ncommits.\n\nThe index and the working tree are adjusted as if you had previously run\ngit checkout <start_point>.  This allows you to start a new history\nthat records a set of paths similar to <start_point> by easily running\ngit commit -a to make the root commit.\n\n\nThis can be useful when you want to publish the tree from a commit\nwithout exposing its full history. You might want to do this to publish\nan open source branch of a project whose current tree is \"clean\", but\nwhose full history contains proprietary or otherwise encumbered bits of\ncode.\n\n\nIf you want to start a disconnected history that records a set of paths\nthat is totally different from the one of <start_point>, then you should\nclear the index and the working tree right after creating the orphan\nbranch by running git rm -rf . from the top level of the working tree.\nAfterwards you will be ready to prepare your new files, repopulating the\nworking tree, by copying them from elsewhere, extracting a tarball, etc.",
				"isString": false
			},
			{
				"name": "ignore-skip-worktree-bits",
				"aliases": [],
				"description": "In sparse checkout mode, git checkout -- <paths> would\nupdate only entries matched by <paths> and sparse patterns\nin $GIT_DIR/info/sparse-checkout. This option ignores\nthe sparse patterns and adds back any files in <paths>.",
				"isString": false
			},
			{
				"name": "merge",
				"aliases": [
					"m"
				],
				"description": "When switching branches,\nif you have local modifications to one or more files that\nare different between the current branch and the branch to\nwhich you are switching, the command refuses to switch\nbranches in order to preserve your modifications in context.\nHowever, with this option, a three-way merge between the current\nbranch, your working tree contents, and the new branch\nis done, and you will be on the new branch.\n\nWhen a merge conflict happens, the index entries for conflicting\npaths are left unmerged, and you need to resolve the conflicts\nand mark the resolved paths with git add (or git rm if the merge\nshould result in deletion of the path).\n\n\nWhen checking out paths from the index, this option lets you recreate\nthe conflicted merge in the specified paths.\n\n\nWhen switching branches with --merge, staged changes may be lost.",
				"isString": false
			},
			{
				"name": "conflict",
				"aliases": [],
				"description": "The same as --merge option above, but changes the way the\nconflicting hunks are presented, overriding the\nmerge.conflictStyle configuration variable.  Possible values are\n\"merge\" (default) and \"diff3\" (in addition to what is shown by\n\"merge\" style, shows the original contents).",
				"isString": false
			},
			{
				"name": "patch",
				"aliases": [
					"p"
				],
				"description": "Interactively select hunks in the difference between the\n<tree-ish> (or the index, if unspecified) and the working\ntree.  The chosen hunks are then applied in reverse to the\nworking tree (and if a <tree-ish> was specified, the index).\n\nThis means that you can use git checkout -p to selectively discard\nedits from your current working tree. See the “Interactive Mode”\nsection of git-add[1] to learn how to operate the --patch mode.\n\n\nNote that this option uses the no overlay mode by default (see also\n--overlay), and currently doesn’t support overlay mode.",
				"isString": false
			},
			{
				"name": "ignore-other-worktrees",
				"aliases": [],
				"description": "git checkout refuses when the wanted ref is already checked\nout by another worktree. This option makes it check the ref\nout anyway. In other words, the ref can be held by more than one\nworktree.",
				"isString": false
			},
			{
				"name": "no-overwrite-ignore",
				"aliases": [
					"overwrite-ignore"
				],
				"description": "Silently overwrite ignored files when switching branches. This\nis the default behavior. Use --no-overwrite-ignore to abort\nthe operation when the new branch contains ignored files.",
				"isString": false
			},
			{
				"name": "no-recurse-submodules",
				"aliases": [
					"recurse-submodules"
				],
				"description": "Using --recurse-submodules will update the content of all active\nsubmodules according to the commit recorded in the superproject. If\nlocal modifications in a submodule would be overwritten the checkout\nwill fail unless -f is used. If nothing (or --no-recurse-submodules)\nis used, submodules working trees will not be updated.\nJust like git-submodule[1], this will detach HEAD of the\nsubmodule.",
				"isString": false
			},
			{
				"name": "no-overlay",
				"aliases": [
					"overlay"
				],
				"description": "In the default overlay mode, git checkout never\nremoves files from the index or the working tree.  When\nspecifying --no-overlay, files that appear in the index and\nworking tree, but not in <tree-ish> are removed, to make them\nmatch <tree-ish> exactly.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "Pathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "Only meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			},
			{
				"name": "<branch>",
				"aliases": [],
				"description": "Branch to checkout; if it refers to a branch (i.e., a name that,\nwhen prepended with \"refs/heads/\", is a valid ref), then that\nbranch is checked out. Otherwise, if it refers to a valid\ncommit, your HEAD becomes \"detached\" and you are no longer on\nany branch (see below for details).\n\nYou can use the @{-N} syntax to refer to the N-th last\nbranch/commit checked out using \"git checkout\" operation. You may\nalso specify - which is synonymous to @{-1}.\n\n\nAs a special case, you may use A...B as a shortcut for the\nmerge base of A and B if there is exactly one merge base. You can\nleave out at most one of A and B, in which case it defaults to HEAD.",
				"isString": true
			},
			{
				"name": "<new_branch>",
				"aliases": [],
				"description": "Name for the new branch.",
				"isString": true
			},
			{
				"name": "<start_point>",
				"aliases": [],
				"description": "The name of a commit at which to start the new branch; see\ngit-branch[1] for details. Defaults to HEAD.\n\nAs a special case, you may use \"A...B\" as a shortcut for the\nmerge base of A and B if there is exactly one merge base. You can\nleave out at most one of A and B, in which case it defaults to HEAD.",
				"isString": true
			},
			{
				"name": "<tree-ish>",
				"aliases": [],
				"description": "Tree to checkout from (when paths are given). If not specified,\nthe index will be used.\n\nAs a special case, you may use \"A...B\" as a shortcut for the\nmerge base of A and B if there is exactly one merge base. You can\nleave out at most one of A and B, in which case it defaults to HEAD.",
				"isString": true
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "Limits the paths affected by the operation.\n\nFor more details, see the pathspec entry in gitglossary[7].",
				"isString": true
			}
		]
	},
	{
		"name": "switch",
		"description": "Switch branches",
		"flags": [
			{
				"name": "<branch>",
				"aliases": [],
				"description": "Branch to switch to.",
				"isString": true
			},
			{
				"name": "<new-branch>",
				"aliases": [],
				"description": "Name for the new branch.",
				"isString": true
			},
			{
				"name": "<start-point>",
				"aliases": [],
				"description": "The starting point for the new branch. Specifying a\n<start-point> allows you to create a branch based on some\nother point in history than where HEAD currently points. (Or,\nin the case of --detach, allows you to inspect and detach\nfrom some other point.)\n\nYou can use the @{-N} syntax to refer to the N-th last\nbranch/commit switched to using \"git switch\" or \"git checkout\"\noperation. You may also specify - which is synonymous to @{-1}.\nThis is often used to switch quickly between two branches, or to undo\na branch switch by mistake.\n\n\nAs a special case, you may use A...B as a shortcut for the merge\nbase of A and B if there is exactly one merge base. You can leave\nout at most one of A and B, in which case it defaults to HEAD.",
				"isString": true
			},
			{
				"name": "create",
				"aliases": [
					"c"
				],
				"description": "Create a new branch named <new-branch> starting at\n<start-point> before switching to the branch. This is a\nconvenient shortcut for:\n\n\n$ git branch <new-branch>\n$ git switch <new-branch>",
				"isString": false
			},
			{
				"name": "force-create",
				"aliases": [
					"C"
				],
				"description": "Similar to --create except that if <new-branch> already\nexists, it will be reset to <start-point>. This is a\nconvenient shortcut for:\n\n\n$ git branch -f <new-branch>\n$ git switch <new-branch>",
				"isString": false
			},
			{
				"name": "detach",
				"aliases": [
					"d"
				],
				"description": "Switch to a commit for inspection and discardable\nexperiments. See the \"DETACHED HEAD\" section in\ngit-checkout[1] for details.",
				"isString": false
			},
			{
				"name": "no-guess",
				"aliases": [
					"guess"
				],
				"description": "If <branch> is not found but there does exist a tracking\nbranch in exactly one remote (call it <remote>) with a\nmatching name, treat as equivalent to\n\n\n$ git switch -c <branch> --track <remote>/<branch>\n\n\n\nIf the branch exists in multiple remotes and one of them is named by\nthe checkout.defaultRemote configuration variable, we’ll use that\none for the purposes of disambiguation, even if the <branch> isn’t\nunique across all remotes. Set it to e.g. checkout.defaultRemote=origin\nto always checkout remote branches from there if <branch> is\nambiguous but exists on the origin remote. See also\ncheckout.defaultRemote in git-config[1].\n\n\n--guess is the default behavior. Use --no-guess to disable it.\n\n\nThe default behavior can be set via the checkout.guess configuration\nvariable.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "An alias for --discard-changes.",
				"isString": false
			},
			{
				"name": "discard-changes",
				"aliases": [],
				"description": "Proceed even if the index or the working tree differs from\nHEAD. Both the index and working tree are restored to match\nthe switching target. If --recurse-submodules is specified,\nsubmodule content is also restored to match the switching\ntarget. This is used to throw away local changes.",
				"isString": false
			},
			{
				"name": "merge",
				"aliases": [
					"m"
				],
				"description": "If you have local modifications to one or more files that are\ndifferent between the current branch and the branch to which\nyou are switching, the command refuses to switch branches in\norder to preserve your modifications in context.  However,\nwith this option, a three-way merge between the current\nbranch, your working tree contents, and the new branch is\ndone, and you will be on the new branch.\n\nWhen a merge conflict happens, the index entries for conflicting\npaths are left unmerged, and you need to resolve the conflicts\nand mark the resolved paths with git add (or git rm if the merge\nshould result in deletion of the path).",
				"isString": false
			},
			{
				"name": "conflict",
				"aliases": [],
				"description": "The same as --merge option above, but changes the way the\nconflicting hunks are presented, overriding the\nmerge.conflictStyle configuration variable.  Possible values are\n\"merge\" (default) and \"diff3\" (in addition to what is shown by\n\"merge\" style, shows the original contents).",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Quiet, suppress feedback messages.",
				"isString": false
			},
			{
				"name": "no-progress",
				"aliases": [
					"progress"
				],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless --quiet\nis specified. This flag enables progress reporting even if not\nattached to a terminal, regardless of --quiet.",
				"isString": false
			},
			{
				"name": "track",
				"aliases": [
					"t"
				],
				"description": "When creating a new branch, set up \"upstream\" configuration.\n-c is implied. See --track in git-branch[1] for\ndetails.\n\nIf no -c option is given, the name of the new branch will be derived\nfrom the remote-tracking branch, by looking at the local part of the\nrefspec configured for the corresponding remote, and then stripping\nthe initial part up to the \"*\".  This would tell us to use hack as\nthe local branch when branching off of origin/hack (or\nremotes/origin/hack, or even refs/remotes/origin/hack).  If the\ngiven name has no slash, or the above guessing results in an empty\nname, the guessing is aborted.  You can explicitly give a name with\n-c in such a case.",
				"isString": false
			},
			{
				"name": "no-track",
				"aliases": [],
				"description": "Do not set up \"upstream\" configuration, even if the\nbranch.autoSetupMerge configuration variable is true.",
				"isString": false
			},
			{
				"name": "orphan",
				"aliases": [],
				"description": "Create a new orphan branch, named <new-branch>. All\ntracked files are removed.",
				"isString": false
			},
			{
				"name": "ignore-other-worktrees",
				"aliases": [],
				"description": "git switch refuses when the wanted ref is already\nchecked out by another worktree. This option makes it check\nthe ref out anyway. In other words, the ref can be held by\nmore than one worktree.",
				"isString": false
			},
			{
				"name": "no-recurse-submodules",
				"aliases": [
					"recurse-submodules"
				],
				"description": "Using --recurse-submodules will update the content of all\nactive submodules according to the commit recorded in the\nsuperproject. If nothing (or --no-recurse-submodules) is\nused, submodules working trees will not be updated. Just\nlike git-submodule[1], this will detach HEAD of the\nsubmodules.",
				"isString": false
			}
		]
	},
	{
		"name": "merge",
		"description": "Join two or more development histories together",
		"flags": [
			{
				"name": "no-commit",
				"aliases": [
					"commit"
				],
				"description": "Perform the merge and commit the result. This option can\nbe used to override --no-commit.\n\nWith --no-commit perform the merge and stop just before creating\na merge commit, to give the user a chance to inspect and further\ntweak the merge result before committing.\n\n\nNote that fast-forward updates do not create a merge commit and\ntherefore there is no way to stop those merges with --no-commit.\nThus, if you want to ensure your branch is not changed or updated\nby the merge command, use --no-ff with --no-commit.",
				"isString": false
			},
			{
				"name": "no-edit",
				"aliases": [
					"edit",
					"e"
				],
				"description": "Invoke an editor before committing successful mechanical merge to\n\tfurther edit the auto-generated merge message, so that the user\n\tcan explain and justify the merge. The --no-edit option can be\n\tused to accept the auto-generated message (this is generally\n\tdiscouraged).\nThe --edit (or -e) option is still useful if you are\ngiving a draft message with the -m option from the command line\nand want to edit it in the editor.\n\nOlder scripts may depend on the historical behaviour of not allowing the\nuser to edit the merge log message. They will see an editor opened when\nthey run git merge. To make it easier to adjust such scripts to the\nupdated behaviour, the environment variable GIT_MERGE_AUTOEDIT can be\nset to no at the beginning of them.",
				"isString": false
			},
			{
				"name": "cleanup",
				"aliases": [],
				"description": "This option determines how the merge message will be cleaned up before\ncommitting. See git-commit[1] for more details. In addition, if\nthe <mode> is given a value of scissors, scissors will be appended\nto MERGE_MSG before being passed on to the commit machinery in the\ncase of a merge conflict.",
				"isString": false
			},
			{
				"name": "ff-only",
				"aliases": [
					"ff",
					"no-ff"
				],
				"description": "Specifies how a merge is handled when the merged-in history is\nalready a descendant of the current history.  --ff is the\ndefault unless merging an annotated (and possibly signed) tag\nthat is not stored in its natural place in the refs/tags/\nhierarchy, in which case --no-ff is assumed.\n\nWith --ff, when possible resolve the merge as a fast-forward (only\nupdate the branch pointer to match the merged branch; do not create a\nmerge commit).  When not possible (when the merged-in history is not a\ndescendant of the current history), create a merge commit.\n\n\nWith --no-ff, create a merge commit in all cases, even when the merge\ncould instead be resolved as a fast-forward.\n\n\nWith --ff-only, resolve the merge as a fast-forward when possible.\nWhen not possible, refuse to merge and exit with a non-zero status.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign the resulting merge commit. The keyid argument is\noptional and defaults to the committer identity; if specified,\nit must be stuck to the option without a space. --no-gpg-sign\nis useful to countermand both commit.gpgSign configuration variable,\nand earlier --gpg-sign.",
				"isString": false
			},
			{
				"name": "log",
				"aliases": [
					"no-log"
				],
				"description": "In addition to branch names, populate the log message with\none-line descriptions from at most <n> actual commits that are being\nmerged. See also git-fmt-merge-msg[1].\n\nWith --no-log do not list one-line descriptions from the\nactual commits being merged.",
				"isString": false
			},
			{
				"name": "no-signoff",
				"aliases": [
					"signoff"
				],
				"description": "Add a Signed-off-by trailer by the committer at the end of the commit\nlog message.  The meaning of a signoff depends on the project\nto which you’re committing.  For example, it may certify that\nthe committer has the rights to submit the work under the\nproject’s license or agrees to some contributor representation,\nsuch as a Developer Certificate of Origin.\n(See http://developercertificate.org for the one used by the\nLinux kernel and Git projects.)  Consult the documentation or\nleadership of the project to which you’re contributing to\nunderstand how the signoffs are used in that project.\n\nThe --no-signoff option can be used to countermand an earlier --signoff\noption on the command line.",
				"isString": false
			},
			{
				"name": "no-stat",
				"aliases": [
					"stat",
					"n"
				],
				"description": "Show a diffstat at the end of the merge. The diffstat is also\ncontrolled by the configuration option merge.stat.\n\nWith -n or --no-stat do not show a diffstat at the end of the\nmerge.",
				"isString": false
			},
			{
				"name": "no-squash",
				"aliases": [
					"squash"
				],
				"description": "Produce the working tree and index state as if a real merge\nhappened (except for the merge information), but do not actually\nmake a commit, move the HEAD, or record $GIT_DIR/MERGE_HEAD\n(to cause the next git commit command to create a merge\ncommit).  This allows you to create a single commit on top of\nthe current branch whose effect is the same as merging another\nbranch (or more in case of an octopus).\n\nWith --no-squash perform the merge and commit the result. This\noption can be used to override --squash.\n\n\nWith --squash, --commit is not allowed, and will fail.",
				"isString": false
			},
			{
				"name": "no-verify",
				"aliases": [],
				"description": "This option bypasses the pre-merge and commit-msg hooks.\nSee also githooks[5].",
				"isString": false
			},
			{
				"name": "strategy",
				"aliases": [
					"s"
				],
				"description": "Use the given merge strategy; can be supplied more than\nonce to specify them in the order they should be tried.\nIf there is no -s option, a built-in list of strategies\nis used instead (git merge-recursive when merging a single\nhead, git merge-octopus otherwise).",
				"isString": false
			},
			{
				"name": "strategy-option",
				"aliases": [
					"X"
				],
				"description": "Pass merge strategy specific option through to the merge\nstrategy.",
				"isString": false
			},
			{
				"name": "no-verify-signatures",
				"aliases": [
					"verify-signatures"
				],
				"description": "Verify that the tip commit of the side branch being merged is\nsigned with a valid key, i.e. a key that has a valid uid: in the\ndefault trust model, this means the signing key has been signed by\na trusted key.  If the tip commit of the side branch is not signed\nwith a valid key, the merge is aborted.",
				"isString": false
			},
			{
				"name": "no-summary",
				"aliases": [
					"summary"
				],
				"description": "Synonyms to --stat and --no-stat; these are deprecated and will be\nremoved in the future.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Operate quietly. Implies --no-progress.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Be verbose.",
				"isString": false
			},
			{
				"name": "no-progress",
				"aliases": [
					"progress"
				],
				"description": "Turn progress on/off explicitly. If neither is specified,\nprogress is shown if standard error is connected to a terminal.\nNote that not all merge strategies may support progress\nreporting.",
				"isString": false
			},
			{
				"name": "no-autostash",
				"aliases": [
					"autostash"
				],
				"description": "Automatically create a temporary stash entry before the operation\nbegins, and apply it after the operation ends.  This means\nthat you can run the operation on a dirty worktree.  However, use\nwith care: the final stash application after a successful\nmerge might result in non-trivial conflicts.",
				"isString": false
			},
			{
				"name": "allow-unrelated-histories",
				"aliases": [],
				"description": "By default, git merge command refuses to merge histories\nthat do not share a common ancestor.  This option can be\nused to override this safety when merging histories of two\nprojects that started their lives independently. As that is\na very rare occasion, no configuration variable to enable\nthis by default exists and will not be added.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Set the commit message to be used for the merge commit (in\ncase one is created).\n\nIf --log is specified, a shortlog of the commits being merged\nwill be appended to the specified message.\n\n\nThe git fmt-merge-msg command can be\nused to give a good default for automated git merge\ninvocations. The automated message can include the branch description.",
				"isString": false
			},
			{
				"name": "file",
				"aliases": [
					"F"
				],
				"description": "Read the commit message to be used for the merge commit (in\ncase one is created).\n\nIf --log is specified, a shortlog of the commits being merged\nwill be appended to the specified message.",
				"isString": false
			},
			{
				"name": "no-rerere-autoupdate",
				"aliases": [
					"rerere-autoupdate"
				],
				"description": "Allow the rerere mechanism to update the index with the\nresult of auto-conflict resolution if possible.",
				"isString": false
			},
			{
				"name": "no-overwrite-ignore",
				"aliases": [
					"overwrite-ignore"
				],
				"description": "Silently overwrite ignored files from the merge result. This\nis the default behavior. Use --no-overwrite-ignore to abort.",
				"isString": false
			},
			{
				"name": "abort",
				"aliases": [],
				"description": "Abort the current conflict resolution process, and\ntry to reconstruct the pre-merge state. If an autostash entry is\npresent, apply it to the worktree.\n\nIf there were uncommitted worktree changes present when the merge\nstarted, git merge --abort will in some cases be unable to\nreconstruct these changes. It is therefore recommended to always\ncommit or stash your changes before running git merge.\n\n\ngit merge --abort is equivalent to git reset --merge when\nMERGE_HEAD is present unless MERGE_AUTOSTASH is also present in\nwhich case git merge --abort applies the stash entry to the worktree\nwhereas git reset --merge will save the stashed changes in the stash\nlist.",
				"isString": false
			},
			{
				"name": "quit",
				"aliases": [],
				"description": "Forget about the current merge in progress. Leave the index\nand the working tree as-is. If MERGE_AUTOSTASH is present, the\nstash entry will be saved to the stash list.",
				"isString": false
			},
			{
				"name": "continue",
				"aliases": [],
				"description": "After a git merge stops due to conflicts you can conclude the\nmerge by running git merge --continue (see \"HOW TO RESOLVE\nCONFLICTS\" section below).",
				"isString": false
			},
			{
				"name": "<commit>…​",
				"aliases": [],
				"description": "Commits, usually other branch heads, to merge into our branch.\nSpecifying more than one commit will create a merge with\nmore than two parents (affectionately called an Octopus merge).\n\nIf no commit is given from the command line, merge the remote-tracking\nbranches that the current branch is configured to use as its upstream.\nSee also the configuration section of this manual page.\n\n\nWhen FETCH_HEAD (and no other commit) is specified, the branches\nrecorded in the .git/FETCH_HEAD file by the previous invocation\nof git fetch for merging are merged to the current branch.",
				"isString": true
			}
		]
	},
	{
		"name": "mergetool",
		"description": "Run merge conflict resolution tools to resolve merge conflicts",
		"flags": [
			{
				"name": "tool",
				"aliases": [
					"t"
				],
				"description": "Use the merge resolution program specified by <tool>.\nValid values include emerge, gvimdiff, kdiff3,\nmeld, vimdiff, and tortoisemerge. Run git mergetool --tool-help\nfor the list of valid <tool> settings.\n\nIf a merge resolution program is not specified, git mergetool\nwill use the configuration variable merge.tool.  If the\nconfiguration variable merge.tool is not set, git mergetool\nwill pick a suitable default.\n\n\nYou can explicitly provide a full path to the tool by setting the\nconfiguration variable mergetool.<tool>.path. For example, you\ncan configure the absolute path to kdiff3 by setting\nmergetool.kdiff3.path. Otherwise, git mergetool assumes the\ntool is available in PATH.\n\n\nInstead of running one of the known merge tool programs,\ngit mergetool can be customized to run an alternative program\nby specifying the command line to invoke in a configuration\nvariable mergetool.<tool>.cmd.\n\n\nWhen git mergetool is invoked with this tool (either through the\n-t or --tool option or the merge.tool configuration\nvariable) the configured command line will be invoked with $BASE\nset to the name of a temporary file containing the common base for\nthe merge, if available; $LOCAL set to the name of a temporary\nfile containing the contents of the file on the current branch;\n$REMOTE set to the name of a temporary file containing the\ncontents of the file to be merged, and $MERGED set to the name\nof the file to which the merge tool should write the result of the\nmerge resolution.\n\n\nIf the custom merge tool correctly indicates the success of a\nmerge resolution with its exit code, then the configuration\nvariable mergetool.<tool>.trustExitCode can be set to true.\nOtherwise, git mergetool will prompt the user to indicate the\nsuccess of the resolution after the custom tool has exited.",
				"isString": false
			},
			{
				"name": "tool-help",
				"aliases": [],
				"description": "Print a list of merge tools that may be used with --tool.",
				"isString": false
			},
			{
				"name": "no-prompt",
				"aliases": [
					"y"
				],
				"description": "Don’t prompt before each invocation of the merge resolution\nprogram.\nThis is the default if the merge resolution program is\nexplicitly specified with the --tool option or with the\nmerge.tool configuration variable.",
				"isString": false
			},
			{
				"name": "prompt",
				"aliases": [],
				"description": "Prompt before each invocation of the merge resolution program\nto give the user a chance to skip the path.",
				"isString": false
			},
			{
				"name": "gui",
				"aliases": [
					"g"
				],
				"description": "When git-mergetool is invoked with the -g or --gui option\nthe default merge tool will be read from the configured\nmerge.guitool variable instead of merge.tool. If\nmerge.guitool is not set, we will fallback to the tool\nconfigured under merge.tool.",
				"isString": false
			},
			{
				"name": "no-gui",
				"aliases": [],
				"description": "This overrides a previous -g or --gui setting and reads the\ndefault merge tool will be read from the configured merge.tool\nvariable.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Process files in the order specified in the\n<orderfile>, which has one shell glob pattern per line.\nThis overrides the diff.orderFile configuration variable\n(see git-config[1]).  To cancel diff.orderFile,\nuse -O/dev/null.",
				"isString": false
			}
		]
	},
	{
		"name": "log",
		"description": "Show commit logs",
		"flags": [
			{
				"name": "follow",
				"aliases": [],
				"description": "Continue listing the history of a file beyond renames\n(works only for a single file).",
				"isString": false
			},
			{
				"name": "decorate",
				"aliases": [
					"no-decorate"
				],
				"description": "Print out the ref names of any commits that are shown. If short is\nspecified, the ref name prefixes refs/heads/, refs/tags/ and\nrefs/remotes/ will not be printed. If full is specified, the\nfull ref name (including prefix) will be printed. If auto is\nspecified, then if the output is going to a terminal, the ref names\nare shown as if short were given, otherwise no ref names are\nshown. The default option is short.",
				"isString": false
			},
			{
				"name": "decorate-refs-exclude",
				"aliases": [
					"decorate-refs=<pattern>"
				],
				"description": "If no --decorate-refs is given, pretend as if all refs were\nincluded.  For each candidate, do not use it for decoration if it\nmatches any patterns given to --decorate-refs-exclude or if it\ndoesn’t match any of the patterns given to --decorate-refs. The\nlog.excludeDecoration config option allows excluding refs from\nthe decorations, but an explicit --decorate-refs pattern will\noverride a match in log.excludeDecoration.",
				"isString": false
			},
			{
				"name": "source",
				"aliases": [],
				"description": "Print out the ref name given on the command line by which each\ncommit was reached.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"[no-]mailmap"
				],
				"description": "Use mailmap file to map author and committer names and email\naddresses to canonical real names and email addresses. See\ngit-shortlog[1].",
				"isString": false
			},
			{
				"name": "full-diff",
				"aliases": [],
				"description": "Without this flag, git log -p <path>... shows commits that\ntouch the specified paths, and diffs about the same specified\npaths.  With this, the full diff is shown for commits that touch\nthe specified paths; this means that \"<path>…​\" limits only\ncommits, and doesn’t limit diff for those commits.\n\nNote that this affects all diff-based output types, e.g. those\nproduced by --stat, etc.",
				"isString": false
			},
			{
				"name": "log-size",
				"aliases": [],
				"description": "Include a line “log size <number>” in the output for each commit,\nwhere <number> is the length of that commit’s message in bytes.\nIntended to speed up tools that read log messages from git log\noutput by allowing them to allocate space in advance.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"L:<funcname>:<file>"
				],
				"description": "Trace the evolution of the line range given by <start>,<end>,\nor by the function name regex <funcname>, within the <file>. You may\nnot give any pathspec limiters.  This is currently limited to\na walk starting from a single revision, i.e., you may only\ngive zero or one positive revision arguments, and\n<start> and <end> (or <funcname>) must exist in the starting revision.\nYou can specify this option more than once. Implies --patch.\nPatch output can be suppressed using --no-patch, but other diff formats\n(namely --raw, --numstat, --shortstat, --dirstat, --summary,\n--name-only, --name-status, --check) are not currently implemented.\n\n<start> and <end> can take one of these forms:\n\n\n\n\nnumber\n\nIf <start> or <end> is a number, it specifies an\nabsolute line number (lines count from 1).\n\n\n\n/regex/\n\nThis form will use the first line matching the given\nPOSIX regex. If <start> is a regex, it will search from the end of\nthe previous -L range, if any, otherwise from the start of file.\nIf <start> is ^/regex/, it will search from the start of file.\nIf <end> is a regex, it will search\nstarting at the line given by <start>.\n\n\n\n+offset or -offset\n\nThis is only valid for <end> and will specify a number\nof lines before or after the line given by <start>.\n\n\n\n\n\nIf :<funcname> is given in place of <start> and <end>, it is a\nregular expression that denotes the range from the first funcname line\nthat matches <funcname>, up to the next funcname line. :<funcname>\nsearches from the end of the previous -L range, if any, otherwise\nfrom the start of file. ^:<funcname> searches from the start of\nfile. The function names are determined in the same way as git diff\nworks out patch hunk headers (see Defining a custom hunk-header\nin gitattributes[5]).",
				"isString": false
			},
			{
				"name": "<revision range>",
				"aliases": [],
				"description": "Show only commits in the specified revision range.  When no\n<revision range> is specified, it defaults to HEAD (i.e. the\nwhole history leading to the current commit).  origin..HEAD\nspecifies all the commits reachable from the current commit\n(i.e. HEAD), but not from origin. For a complete list of\nways to spell <revision range>, see the Specifying Ranges\nsection of gitrevisions[7].",
				"isString": true
			},
			{
				"name": "[--] <path>…​",
				"aliases": [],
				"description": "Show only commits that are enough to explain how the files\nthat match the specified paths came to be.  See History\nSimplification below for details and other simplification\nmodes.\n\nPaths may need to be prefixed with -- to separate them from\noptions or the revision range, when confusion arises.",
				"isString": true
			}
		]
	},
	{
		"name": "stash",
		"description": "Stash the changes in a dirty working directory away",
		"flags": [
			{
				"name": "all",
				"aliases": [
					"a"
				],
				"description": "This option is only valid for push and save commands.\n\nAll ignored and untracked files are also stashed and then cleaned\nup with git clean.",
				"isString": false
			},
			{
				"name": "include-untracked",
				"aliases": [
					"u"
				],
				"description": "This option is only valid for push and save commands.\n\nAll untracked files are also stashed and then cleaned up with\ngit clean.",
				"isString": false
			},
			{
				"name": "index",
				"aliases": [],
				"description": "This option is only valid for pop and apply commands.\n\nTries to reinstate not only the working tree’s changes, but also\nthe index’s ones. However, this can fail, when you have conflicts\n(which are stored in the index, where you therefore can no longer\napply the changes as they were originally).",
				"isString": false
			},
			{
				"name": "no-keep-index",
				"aliases": [
					"k",
					"keep-index"
				],
				"description": "This option is only valid for push and save commands.\n\nAll changes already added to the index are left intact.",
				"isString": false
			},
			{
				"name": "patch",
				"aliases": [
					"p"
				],
				"description": "This option is only valid for push and save commands.\n\nInteractively select hunks from the diff between HEAD and the\nworking tree to be stashed.  The stash entry is constructed such\nthat its index state is the same as the index state of your\nrepository, and its worktree contains only the changes you selected\ninteractively.  The selected changes are then rolled back from your\nworktree. See the “Interactive Mode” section of git-add[1]\nto learn how to operate the --patch mode.\n\n\nThe --patch option implies --keep-index.  You can use\n--no-keep-index to override this.",
				"isString": false
			},
			{
				"name": "pathspec-from-file",
				"aliases": [],
				"description": "This option is only valid for push command.\n\nPathspec is passed in <file> instead of commandline args. If\n<file> is exactly - then standard input is used. Pathspec\nelements are separated by LF or CR/LF. Pathspec elements can be\nquoted as explained for the configuration variable core.quotePath\n(see git-config[1]). See also --pathspec-file-nul and\nglobal --literal-pathspecs.",
				"isString": false
			},
			{
				"name": "pathspec-file-nul",
				"aliases": [],
				"description": "This option is only valid for push command.\n\nOnly meaningful with --pathspec-from-file. Pathspec elements are\nseparated with NUL character and all other characters are taken\nliterally (including newlines and quotes).",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "This option is only valid for apply, drop, pop, push,\nsave, store commands.\n\nQuiet, suppress feedback messages.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This option is only valid for push command.\n\nSeparates pathspec from options for disambiguation purposes.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "This option is only valid for push command.\n\nThe new stash entry records the modified states only for the files\nthat match the pathspec.  The index entries and working tree files\nare then rolled back to the state in HEAD only for these files,\ntoo, leaving files that do not match the pathspec intact.\n\n\nFor more details, see the pathspec entry in gitglossary[7].",
				"isString": true
			},
			{
				"name": "<stash>",
				"aliases": [],
				"description": "This option is only valid for apply, branch, drop, pop,\nshow commands.\n\nA reference of the form stash@{<revision>}. When no <stash> is\ngiven, the latest stash is assumed (that is, stash@{0}).",
				"isString": true
			}
		]
	},
	{
		"name": "tag",
		"description": "Create, list, delete or verify a tag object signed with GPG",
		"flags": [
			{
				"name": "annotate",
				"aliases": [
					"a"
				],
				"description": "Make an unsigned, annotated tag object",
				"isString": false
			},
			{
				"name": "sign",
				"aliases": [
					"s"
				],
				"description": "Make a GPG-signed tag, using the default e-mail address’s key.\nThe default behavior of tag GPG-signing is controlled by tag.gpgSign\nconfiguration variable if it exists, or disabled otherwise.\nSee git-config[1].",
				"isString": false
			},
			{
				"name": "no-sign",
				"aliases": [],
				"description": "Override tag.gpgSign configuration variable that is\nset to force each and every tag to be signed.",
				"isString": false
			},
			{
				"name": "local-user",
				"aliases": [
					"u"
				],
				"description": "Make a GPG-signed tag, using the given key.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "Replace an existing tag with the given name (instead of failing)",
				"isString": false
			},
			{
				"name": "delete",
				"aliases": [
					"d"
				],
				"description": "Delete existing tags with the given names.",
				"isString": false
			},
			{
				"name": "verify",
				"aliases": [
					"v"
				],
				"description": "Verify the GPG signature of the given tag names.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "<num> specifies how many lines from the annotation, if any,\nare printed when using -l. Implies --list.\n\nThe default is not to print any annotation lines.\nIf no number is given to -n, only the first line is printed.\nIf the tag is not annotated, the commit message is displayed instead.",
				"isString": false
			},
			{
				"name": "list",
				"aliases": [
					"l"
				],
				"description": "List tags. With optional <pattern>..., e.g. git tag --list\n'v-*', list only the tags that match the pattern(s).\n\nRunning \"git tag\" without arguments also lists all tags. The pattern\nis a shell wildcard (i.e., matched using fnmatch(3)). Multiple\npatterns may be given; if any of them matches, the tag is shown.\n\n\nThis option is implicitly supplied if any other list-like option such\nas --contains is provided. See the documentation for each of those\noptions for details.",
				"isString": false
			},
			{
				"name": "sort",
				"aliases": [],
				"description": "Sort based on the key given.  Prefix - to sort in\ndescending order of the value. You may use the --sort=<key> option\nmultiple times, in which case the last key becomes the primary\nkey. Also supports \"version:refname\" or \"v:refname\" (tag\nnames are treated as versions). The \"version:refname\" sort\norder can also be affected by the \"versionsort.suffix\"\nconfiguration variable.\nThe keys supported are the same as those in git for-each-ref.\nSort order defaults to the value configured for the tag.sort\nvariable if it exists, or lexicographic order otherwise. See\ngit-config[1].",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Respect any colors specified in the --format option. The\n<when> field must be one of always, never, or auto (if\n<when> is absent, behave as if always was given).",
				"isString": false
			},
			{
				"name": "ignore-case",
				"aliases": [
					"i"
				],
				"description": "Sorting and filtering tags are case insensitive.",
				"isString": false
			},
			{
				"name": "column",
				"aliases": [
					"no-column"
				],
				"description": "Display tag listing in columns. See configuration variable\ncolumn.tag for option syntax. --column and --no-column\nwithout options are equivalent to always and never respectively.\n\nThis option is only applicable when listing tags without annotation lines.",
				"isString": false
			},
			{
				"name": "contains",
				"aliases": [],
				"description": "Only list tags which contain the specified commit (HEAD if not\nspecified). Implies --list.",
				"isString": false
			},
			{
				"name": "no-contains",
				"aliases": [],
				"description": "Only list tags which don’t contain the specified commit (HEAD if\nnot specified). Implies --list.",
				"isString": false
			},
			{
				"name": "merged",
				"aliases": [],
				"description": "Only list tags whose commits are reachable from the specified\ncommit (HEAD if not specified).",
				"isString": false
			},
			{
				"name": "no-merged",
				"aliases": [],
				"description": "Only list tags whose commits are not reachable from the specified\ncommit (HEAD if not specified).",
				"isString": false
			},
			{
				"name": "points-at",
				"aliases": [],
				"description": "Only list tags of the given object (HEAD if not\nspecified). Implies --list.",
				"isString": false
			},
			{
				"name": "message",
				"aliases": [
					"m"
				],
				"description": "Use the given tag message (instead of prompting).\nIf multiple -m options are given, their values are\nconcatenated as separate paragraphs.\nImplies -a if none of -a, -s, or -u <keyid>\nis given.",
				"isString": false
			},
			{
				"name": "file",
				"aliases": [
					"F"
				],
				"description": "Take the tag message from the given file.  Use - to\nread the message from the standard input.\nImplies -a if none of -a, -s, or -u <keyid>\nis given.",
				"isString": false
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "The message taken from file with -F and command line with\n-m are usually used as the tag message unmodified.\nThis option lets you further edit the message taken from these sources.",
				"isString": false
			},
			{
				"name": "cleanup",
				"aliases": [],
				"description": "This option sets how the tag message is cleaned up.\nThe  <mode> can be one of verbatim, whitespace and strip.  The\nstrip mode is default. The verbatim mode does not change message at\nall, whitespace removes just leading/trailing whitespace lines and\nstrip removes both whitespace and commentary.",
				"isString": false
			},
			{
				"name": "create-reflog",
				"aliases": [],
				"description": "Create a reflog for the tag. To globally enable reflogs for tags, see\ncore.logAllRefUpdates in git-config[1].\nThe negated form --no-create-reflog only overrides an earlier\n--create-reflog, but currently does not negate the setting of\ncore.logAllRefUpdates.",
				"isString": false
			},
			{
				"name": "format",
				"aliases": [],
				"description": "A string that interpolates %(fieldname) from a tag ref being shown\nand the object it points at.  The format is the same as\nthat of git-for-each-ref[1].  When unspecified,\ndefaults to %(refname:strip=2).",
				"isString": false
			},
			{
				"name": "<tagname>",
				"aliases": [],
				"description": "The name of the tag to create, delete, or describe.\nThe new tag name must pass all checks defined by\ngit-check-ref-format[1].  Some of these checks\nmay restrict the characters allowed in a tag name.",
				"isString": true
			},
			{
				"name": "<commit>",
				"aliases": [
					"<object>"
				],
				"description": "The object that the new tag will refer to, usually a commit.\nDefaults to HEAD.",
				"isString": true
			}
		]
	},
	{
		"name": "worktree",
		"description": "Manage multiple working trees",
		"flags": [
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "By default, add refuses to create a new working tree when\n<commit-ish> is a branch name and is already checked out by\nanother working tree, or if <path> is already assigned to some\nworking tree but is missing (for instance, if <path> was deleted\nmanually). This option overrides these safeguards. To add a missing but\nlocked working tree path, specify --force twice.\n\nmove refuses to move a locked working tree unless --force is specified\ntwice. If the destination is already assigned to some other working tree but is\nmissing (for instance, if <new-path> was deleted manually), then --force\nallows the move to proceed; use --force twice if the destination is locked.\n\n\nremove refuses to remove an unclean working tree unless --force is used.\nTo remove a locked working tree, specify --force twice.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"B"
				],
				"description": "With add, create a new branch named <new-branch> starting at\n<commit-ish>, and check out <new-branch> into the new working tree.\nIf <commit-ish> is omitted, it defaults to HEAD.\nBy default, -b refuses to create a new branch if it already\nexists. -B overrides this safeguard, resetting <new-branch> to\n<commit-ish>.",
				"isString": false
			},
			{
				"name": "detach",
				"aliases": [
					"d"
				],
				"description": "With add, detach HEAD in the new working tree. See \"DETACHED HEAD\"\nin git-checkout[1].",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "By default, add checks out <commit-ish>, however, --no-checkout can\nbe used to suppress checkout in order to make customizations,\nsuch as configuring sparse-checkout. See \"Sparse checkout\"\nin git-read-tree[1].",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "With worktree add <path>, without <commit-ish>, instead\nof creating a new branch from HEAD, if there exists a tracking\nbranch in exactly one remote matching the basename of <path>,\nbase the new branch on the remote-tracking branch, and mark\nthe remote-tracking branch as \"upstream\" from the new branch.\n\nThis can also be set up as the default behaviour by using the\nworktree.guessRemote config option.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When creating a new branch, if <commit-ish> is a branch,\nmark it as \"upstream\" from the new branch.  This is the\ndefault if <commit-ish> is a remote-tracking branch.  See\n--track in git-branch[1] for details.",
				"isString": false
			},
			{
				"name": "lock",
				"aliases": [],
				"description": "Keep the working tree locked after creation. This is the\nequivalent of git worktree lock after git worktree add,\nbut without a race condition.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "With prune, do not remove anything; just report what it would\nremove.",
				"isString": false
			},
			{
				"name": "porcelain",
				"aliases": [],
				"description": "With list, output in an easy-to-parse format for scripts.\nThis format will remain stable across Git versions and regardless of user\nconfiguration.  See below for details.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "With add, suppress feedback messages.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "With prune, report all removals.\n\nWith list, output additional information about worktrees (see below).",
				"isString": false
			},
			{
				"name": "expire",
				"aliases": [],
				"description": "With prune, only expire unused working trees older than <time>.\n\nWith list, annotate missing working trees as prunable if they are\nolder than <time>.",
				"isString": false
			},
			{
				"name": "reason",
				"aliases": [],
				"description": "With lock, an explanation why the working tree is locked.",
				"isString": false
			},
			{
				"name": "<worktree>",
				"aliases": [],
				"description": "Working trees can be identified by path, either relative or\nabsolute.\n\nIf the last path components in the working tree’s path is unique among\nworking trees, it can be used to identify a working tree. For example if\nyou only have two working trees, at /abc/def/ghi and /abc/def/ggg,\nthen ghi or def/ghi is enough to point to the former working tree.",
				"isString": true
			}
		]
	},
	{
		"name": "fetch",
		"description": "Download objects and refs from another repository",
		"flags": [
			{
				"name": "all",
				"aliases": [],
				"description": "Fetch all remotes.",
				"isString": false
			},
			{
				"name": "append",
				"aliases": [
					"a"
				],
				"description": "Append ref names and object names of fetched refs to the\nexisting contents of .git/FETCH_HEAD.  Without this\noption old data in .git/FETCH_HEAD will be overwritten.",
				"isString": false
			},
			{
				"name": "atomic",
				"aliases": [],
				"description": "Use an atomic transaction to update local refs. Either all refs are\nupdated, or on error, no refs are updated.",
				"isString": false
			},
			{
				"name": "depth",
				"aliases": [],
				"description": "Limit fetching to the specified number of commits from the tip of\neach remote branch history. If fetching to a shallow repository\ncreated by git clone with --depth=<depth> option (see\ngit-clone[1]), deepen or shorten the history to the specified\nnumber of commits. Tags for the deepened commits are not fetched.",
				"isString": false
			},
			{
				"name": "deepen",
				"aliases": [],
				"description": "Similar to --depth, except it specifies the number of commits\nfrom the current shallow boundary instead of from the tip of\neach remote branch history.",
				"isString": false
			},
			{
				"name": "shallow-since",
				"aliases": [],
				"description": "Deepen or shorten the history of a shallow repository to\ninclude all reachable commits after <date>.",
				"isString": false
			},
			{
				"name": "shallow-exclude",
				"aliases": [],
				"description": "Deepen or shorten the history of a shallow repository to\nexclude commits reachable from a specified remote branch or tag.\nThis option can be specified multiple times.",
				"isString": false
			},
			{
				"name": "unshallow",
				"aliases": [],
				"description": "If the source repository is complete, convert a shallow\nrepository to a complete one, removing all the limitations\nimposed by shallow repositories.\n\nIf the source repository is shallow, fetch as much as possible so that\nthe current repository has the same history as the source repository.",
				"isString": false
			},
			{
				"name": "update-shallow",
				"aliases": [],
				"description": "By default when fetching from a shallow repository,\ngit fetch refuses refs that require updating\n.git/shallow. This option updates .git/shallow and accept such\nrefs.",
				"isString": false
			},
			{
				"name": "negotiation-tip",
				"aliases": [],
				"description": "By default, Git will report, to the server, commits reachable\nfrom all local refs to find common commits in an attempt to\nreduce the size of the to-be-received packfile. If specified,\nGit will only report commits reachable from the given tips.\nThis is useful to speed up fetches when the user knows which\nlocal ref is likely to have commits in common with the\nupstream ref being fetched.\n\nThis option may be specified more than once; if so, Git will report\ncommits reachable from any of the given commits.\n\n\nThe argument to this option may be a glob on ref names, a ref, or the (possibly\nabbreviated) SHA-1 of a commit. Specifying a glob is equivalent to specifying\nthis option multiple times, one for each matching ref name.\n\n\nSee also the fetch.negotiationAlgorithm configuration variable\ndocumented in git-config[1].",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [],
				"description": "Show what would be done, without making any changes.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Write the list of remote refs fetched in the FETCH_HEAD\nfile directly under $GIT_DIR.  This is the default.\nPassing --no-write-fetch-head from the command line tells\nGit not to write the file.  Under --dry-run option, the\nfile is never written.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "When git fetch is used with <src>:<dst> refspec it may\nrefuse to update the local branch as discussed\nin the <refspec> part below.\nThis option overrides that check.",
				"isString": false
			},
			{
				"name": "keep",
				"aliases": [
					"k"
				],
				"description": "Keep downloaded pack.",
				"isString": false
			},
			{
				"name": "multiple",
				"aliases": [],
				"description": "Allow several <repository> and <group> arguments to be\nspecified. No <refspec>s may be specified.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"[no-]auto-gc"
				],
				"description": "Run git maintenance run --auto at the end to perform automatic\nrepository maintenance if needed. (--[no-]auto-gc is a synonym.)\nThis is enabled by default.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Write a commit-graph after fetching. This overrides the config\nsetting fetch.writeCommitGraph.",
				"isString": false
			},
			{
				"name": "prune",
				"aliases": [
					"p"
				],
				"description": "Before fetching, remove any remote-tracking references that no\nlonger exist on the remote.  Tags are not subject to pruning\nif they are fetched only because of the default tag\nauto-following or due to a --tags option.  However, if tags\nare fetched due to an explicit refspec (either on the command\nline or in the remote configuration, for example if the remote\nwas cloned with the --mirror option), then they are also\nsubject to pruning. Supplying --prune-tags is a shorthand for\nproviding the tag refspec.\n\nSee the PRUNING section below for more details.",
				"isString": false
			},
			{
				"name": "prune-tags",
				"aliases": [
					"P"
				],
				"description": "Before fetching, remove any local tags that no longer exist on\nthe remote if --prune is enabled. This option should be used\nmore carefully, unlike --prune it will remove any local\nreferences (local tags) that have been created. This option is\na shorthand for providing the explicit tag refspec along with\n--prune, see the discussion about that in its documentation.\n\nSee the PRUNING section below for more details.",
				"isString": false
			},
			{
				"name": "no-tags",
				"aliases": [
					"n"
				],
				"description": "By default, tags that point at objects that are downloaded\nfrom the remote repository are fetched and stored locally.\nThis option disables this automatic tag following. The default\nbehavior for a remote may be specified with the remote.<name>.tagOpt\nsetting. See git-config[1].",
				"isString": false
			},
			{
				"name": "refmap",
				"aliases": [],
				"description": "When fetching refs listed on the command line, use the\nspecified refspec (can be given more than once) to map the\nrefs to remote-tracking branches, instead of the values of\nremote.*.fetch configuration variables for the remote\nrepository.  Providing an empty <refspec> to the\n--refmap option causes Git to ignore the configured\nrefspecs and rely entirely on the refspecs supplied as\ncommand-line arguments. See section on \"Configured Remote-tracking\nBranches\" for details.",
				"isString": false
			},
			{
				"name": "tags",
				"aliases": [
					"t"
				],
				"description": "Fetch all tags from the remote (i.e., fetch remote tags\nrefs/tags/* into local tags with the same name), in addition\nto whatever else would otherwise be fetched.  Using this\noption alone does not subject tags to pruning, even if --prune\nis used (though tags may be pruned anyway if they are also the\ndestination of an explicit refspec; see --prune).",
				"isString": false
			},
			{
				"name": "recurse-submodules",
				"aliases": [],
				"description": "This option controls if and under what conditions new commits of\npopulated submodules should be fetched too. It can be used as a\nboolean option to completely disable recursion when set to no or to\nunconditionally recurse into all populated submodules when set to\nyes, which is the default when this option is used without any\nvalue. Use on-demand to only recurse into a populated submodule\nwhen the superproject retrieves a commit that updates the submodule’s\nreference to a commit that isn’t already in the local submodule\nclone. By default, on-demand is used, unless\nfetch.recurseSubmodules is set (see git-config[1]).",
				"isString": false
			},
			{
				"name": "jobs",
				"aliases": [
					"j"
				],
				"description": "Number of parallel children to be used for all forms of fetching.\n\nIf the --multiple option was specified, the different remotes will be fetched\nin parallel. If multiple submodules are fetched, they will be fetched in\nparallel. To control them independently, use the config settings\nfetch.parallel and submodule.fetchJobs (see git-config[1]).\n\n\nTypically, parallel recursive and multi-remote fetches will be faster. By\ndefault fetches are performed sequentially, not in parallel.",
				"isString": false
			},
			{
				"name": "no-recurse-submodules",
				"aliases": [],
				"description": "Disable recursive fetching of submodules (this has the same effect as\nusing the --recurse-submodules=no option).",
				"isString": false
			},
			{
				"name": "set-upstream",
				"aliases": [],
				"description": "If the remote is fetched successfully, add upstream\n(tracking) reference, used by argument-less\ngit-pull[1] and other commands. For more information,\nsee branch.<name>.merge and branch.<name>.remote in\ngit-config[1].",
				"isString": false
			},
			{
				"name": "submodule-prefix",
				"aliases": [],
				"description": "Prepend <path> to paths printed in informative messages\nsuch as \"Fetching submodule foo\".  This option is used\ninternally when recursing over submodules.",
				"isString": false
			},
			{
				"name": "recurse-submodules-default",
				"aliases": [],
				"description": "This option is used internally to temporarily provide a\nnon-negative default value for the --recurse-submodules\noption.  All other methods of configuring fetch’s submodule\nrecursion (such as settings in gitmodules[5] and\ngit-config[1]) override this option, as does\nspecifying --[no-]recurse-submodules directly.",
				"isString": false
			},
			{
				"name": "update-head-ok",
				"aliases": [
					"u"
				],
				"description": "By default git fetch refuses to update the head which\ncorresponds to the current branch.  This flag disables the\ncheck.  This is purely for the internal use for git pull\nto communicate with git fetch, and unless you are\nimplementing your own Porcelain you are not supposed to\nuse it.",
				"isString": false
			},
			{
				"name": "upload-pack",
				"aliases": [],
				"description": "When given, and the repository to fetch from is handled\nby git fetch-pack, --exec=<upload-pack> is passed to\nthe command to specify non-default path for the command\nrun on the other end.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Pass --quiet to git-fetch-pack and silence any other internally\nused git commands. Progress is not reported to the standard error\nstream.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Be verbose.",
				"isString": false
			},
			{
				"name": "progress",
				"aliases": [],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless -q\nis specified. This flag forces progress status even if the\nstandard error stream is not directed to a terminal.",
				"isString": false
			},
			{
				"name": "server-option",
				"aliases": [
					"o"
				],
				"description": "Transmit the given string to the server when communicating using\nprotocol version 2.  The given string must not contain a NUL or LF\ncharacter.  The server’s handling of server options, including\nunknown ones, is server-specific.\nWhen multiple --server-option=<option> are given, they are all\nsent to the other side in the order listed on the command line.",
				"isString": false
			},
			{
				"name": "show-forced-updates",
				"aliases": [],
				"description": "By default, git checks if a branch is force-updated during\nfetch. This can be disabled through fetch.showForcedUpdates, but\nthe --show-forced-updates option guarantees this check occurs.\nSee git-config[1].",
				"isString": false
			},
			{
				"name": "no-show-forced-updates",
				"aliases": [],
				"description": "By default, git checks if a branch is force-updated during\nfetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates\nto false to skip this check for performance reasons. If used during\ngit-pull the --ff-only option will still check for forced updates\nbefore attempting a fast-forward update. See git-config[1].",
				"isString": false
			},
			{
				"name": "ipv4",
				"aliases": [
					"4"
				],
				"description": "Use IPv4 addresses only, ignoring IPv6 addresses.",
				"isString": false
			},
			{
				"name": "ipv6",
				"aliases": [
					"6"
				],
				"description": "Use IPv6 addresses only, ignoring IPv4 addresses.",
				"isString": false
			},
			{
				"name": "<repository>",
				"aliases": [],
				"description": "The \"remote\" repository that is the source of a fetch\nor pull operation.  This parameter can be either a URL\n(see the section GIT URLS below) or the name\nof a remote (see the section REMOTES below).",
				"isString": true
			},
			{
				"name": "<group>",
				"aliases": [],
				"description": "A name referring to a list of repositories as the value\nof remotes.<group> in the configuration file.\n(See git-config[1]).",
				"isString": true
			},
			{
				"name": "<refspec>",
				"aliases": [],
				"description": "Specifies which refs to fetch and which local refs to update.\nWhen no <refspec>s appear on the command line, the refs to fetch\nare read from remote.<repository>.fetch variables instead\n(see CONFIGURED REMOTE-TRACKING BRANCHES below).\n\nThe format of a <refspec> parameter is an optional plus\n+, followed by the source <src>, followed\nby a colon :, followed by the destination ref <dst>.\nThe colon can be omitted when <dst> is empty.  <src> is\ntypically a ref, but it can also be a fully spelled hex object\nname.\n\n\nA <refspec> may contain a * in its <src> to indicate a simple pattern\nmatch. Such a refspec functions like a glob that matches any ref with the\nsame prefix. A pattern <refspec> must have a * in both the <src> and\n<dst>. It will map refs to the destination by replacing the * with the\ncontents matched from the source.\n\n\nIf a refspec is prefixed by ^, it will be interpreted as a negative\nrefspec. Rather than specifying which refs to fetch or which local refs to\nupdate, such a refspec will instead specify refs to exclude. A ref will be\nconsidered to match if it matches at least one positive refspec, and does\nnot match any negative refspec. Negative refspecs can be useful to restrict\nthe scope of a pattern refspec so that it will not include specific refs.\nNegative refspecs can themselves be pattern refspecs. However, they may only\ncontain a <src> and do not specify a <dst>. Fully spelled out hex object\nnames are also not supported.\n\n\ntag <tag> means the same as refs/tags/<tag>:refs/tags/<tag>;\nit requests fetching everything up to the given tag.\n\n\nThe remote ref that matches <src>\nis fetched, and if <dst> is not an empty string, an attempt\nis made to update the local ref that matches it.\n\n\nWhether that update is allowed without --force depends on the ref\nnamespace it’s being fetched to, the type of object being fetched, and\nwhether the update is considered to be a fast-forward. Generally, the\nsame rules apply for fetching as when pushing, see the <refspec>...\nsection of git-push[1] for what those are. Exceptions to those\nrules particular to git fetch are noted below.\n\n\nUntil Git version 2.20, and unlike when pushing with\ngit-push[1], any updates to refs/tags/* would be accepted\nwithout + in the refspec (or --force). When fetching, we promiscuously\nconsidered all tag updates from a remote to be forced fetches.  Since\nGit version 2.20, fetching to update refs/tags/* works the same way\nas when pushing. I.e. any updates will be rejected without + in the\nrefspec (or --force).\n\n\nUnlike when pushing with git-push[1], any updates outside of\nrefs/{tags,heads}/* will be accepted without + in the refspec (or\n--force), whether that’s swapping e.g. a tree object for a blob, or\na commit for another commit that’s doesn’t have the previous commit as\nan ancestor etc.\n\n\nUnlike when pushing with git-push[1], there is no\nconfiguration which’ll amend these rules, and nothing like a\npre-fetch hook analogous to the pre-receive hook.\n\n\nAs with pushing with git-push[1], all of the rules described\nabove about what’s not allowed as an update can be overridden by\nadding an the optional leading + to a refspec (or using --force\ncommand line option). The only exception to this is that no amount of\nforcing will make the refs/heads/* namespace accept a non-commit\nobject.\n\n\n\n\n\nNote\n\n\nWhen the remote branch you want to fetch is known to\nbe rewound and rebased regularly, it is expected that\nits new tip will not be descendant of its previous tip\n(as stored in your remote-tracking branch the last time\nyou fetched).  You would want\nto use the + sign to indicate non-fast-forward updates\nwill be needed for such branches.  There is no way to\ndetermine or declare that a branch will be made available\nin a repository with this behavior; the pulling user simply\nmust know this is the expected usage pattern for a branch.",
				"isString": true
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "Read refspecs, one per line, from stdin in addition to those provided\nas arguments. The \"tag <name>\" format is not supported.",
				"isString": false
			}
		]
	},
	{
		"name": "pull",
		"description": "Fetch from and integrate with another repository or a local branch",
		"flags": [
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "This is passed to both underlying git-fetch to squelch reporting of\nduring transfer, and underlying git-merge to squelch output during\nmerging.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Pass --verbose to git-fetch and git-merge.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This option controls if new commits of populated submodules should\nbe fetched, and if the working trees of active submodules should be\nupdated, too (see git-fetch[1], git-config[1] and\ngitmodules[5]).\n\nIf the checkout is done via rebase, local submodule commits are rebased as well.\n\n\nIf the update is done via merge, the submodule conflicts are resolved and checked out.",
				"isString": false
			}
		]
	},
	{
		"name": "push",
		"description": "Update remote refs along with associated objects",
		"flags": [
			{
				"name": "<repository>",
				"aliases": [],
				"description": "The \"remote\" repository that is destination of a push\noperation.  This parameter can be either a URL\n(see the section GIT URLS below) or the name\nof a remote (see the section REMOTES below).",
				"isString": true
			},
			{
				"name": "<refspec>…​",
				"aliases": [],
				"description": "Specify what destination ref to update with what source object.\nThe format of a <refspec> parameter is an optional plus\n+, followed by the source object <src>, followed\nby a colon :, followed by the destination ref <dst>.\n\nThe <src> is often the name of the branch you would want to push, but\nit can be any arbitrary \"SHA-1 expression\", such as master~4 or\nHEAD (see gitrevisions[7]).\n\n\nThe <dst> tells which ref on the remote side is updated with this\npush. Arbitrary expressions cannot be used here, an actual ref must\nbe named.\nIf git push [<repository>] without any <refspec> argument is set to\nupdate some ref at the destination with <src> with\nremote.<repository>.push configuration variable, :<dst> part can\nbe omitted—​such a push will update a ref that <src> normally updates\nwithout any <refspec> on the command line.  Otherwise, missing\n:<dst> means to update the same ref as the <src>.\n\n\nIf <dst> doesn’t start with refs/ (e.g. refs/heads/master) we will\ntry to infer where in refs/* on the destination <repository> it\nbelongs based on the type of <src> being pushed and whether <dst>\nis ambiguous.\n\n\n\n\n\n\nIf <dst> unambiguously refers to a ref on the <repository> remote,\nthen push to that ref.\n\n\nIf <src> resolves to a ref starting with refs/heads/ or refs/tags/,\nthen prepend that to <dst>.\n\n\nOther ambiguity resolutions might be added in the future, but for\nnow any other cases will error out with an error indicating what we\ntried, and depending on the advice.pushUnqualifiedRefname\nconfiguration (see git-config[1]) suggest what refs/\nnamespace you may have wanted to push to.\n\n\n\n\n\n\nThe object referenced by <src> is used to update the <dst> reference\non the remote side. Whether this is allowed depends on where in\nrefs/* the <dst> reference lives as described in detail below, in\nthose sections \"update\" means any modifications except deletes, which\nas noted after the next few sections are treated differently.\n\n\nThe refs/heads/* namespace will only accept commit objects, and\nupdates only if they can be fast-forwarded.\n\n\nThe refs/tags/* namespace will accept any kind of object (as\ncommits, trees and blobs can be tagged), and any updates to them will\nbe rejected.\n\n\nIt’s possible to push any type of object to any namespace outside of\nrefs/{tags,heads}/*. In the case of tags and commits, these will be\ntreated as if they were the commits inside refs/heads/* for the\npurposes of whether the update is allowed.\n\n\nI.e. a fast-forward of commits and tags outside refs/{tags,heads}/*\nis allowed, even in cases where what’s being fast-forwarded is not a\ncommit, but a tag object which happens to point to a new commit which\nis a fast-forward of the commit the last tag (or commit) it’s\nreplacing. Replacing a tag with an entirely different tag is also\nallowed, if it points to the same commit, as well as pushing a peeled\ntag, i.e. pushing the commit that existing tag object points to, or a\nnew tag object which an existing commit points to.\n\n\nTree and blob objects outside of refs/{tags,heads}/* will be treated\nthe same way as if they were inside refs/tags/*, any update of them\nwill be rejected.\n\n\nAll of the rules described above about what’s not allowed as an update\ncan be overridden by adding an the optional leading + to a refspec\n(or using --force command line option). The only exception to this\nis that no amount of forcing will make the refs/heads/* namespace\naccept a non-commit object. Hooks and configuration can also override\nor amend these rules, see e.g. receive.denyNonFastForwards in\ngit-config[1] and pre-receive and update in\ngithooks[5].\n\n\nPushing an empty <src> allows you to delete the <dst> ref from the\nremote repository. Deletions are always accepted without a leading +\nin the refspec (or --force), except when forbidden by configuration\nor hooks. See receive.denyDeletes in git-config[1] and\npre-receive and update in githooks[5].\n\n\nThe special refspec : (or +: to allow non-fast-forward updates)\ndirects Git to push \"matching\" branches: for every branch that exists on\nthe local side, the remote side is updated if a branch of the same name\nalready exists on the remote side.\n\n\ntag <tag> means the same as refs/tags/<tag>:refs/tags/<tag>.",
				"isString": true
			},
			{
				"name": "all",
				"aliases": [],
				"description": "Push all branches (i.e. refs under refs/heads/); cannot be\nused with other <refspec>.",
				"isString": false
			},
			{
				"name": "prune",
				"aliases": [],
				"description": "Remove remote branches that don’t have a local counterpart. For example\na remote branch tmp will be removed if a local branch with the same\nname doesn’t exist any more. This also respects refspecs, e.g.\ngit push --prune remote refs/heads/*:refs/tmp/* would\nmake sure that remote refs/tmp/foo will be removed if refs/heads/foo\ndoesn’t exist.",
				"isString": false
			},
			{
				"name": "mirror",
				"aliases": [],
				"description": "Instead of naming each ref to push, specifies that all\nrefs under refs/ (which includes but is not\nlimited to refs/heads/, refs/remotes/, and refs/tags/)\nbe mirrored to the remote repository.  Newly created local\nrefs will be pushed to the remote end, locally updated refs\nwill be force updated on the remote end, and deleted refs\nwill be removed from the remote end.  This is the default\nif the configuration option remote.<remote>.mirror is\nset.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Do everything except actually send the updates.",
				"isString": false
			},
			{
				"name": "porcelain",
				"aliases": [],
				"description": "Produce machine-readable output.  The output status line for each ref\nwill be tab-separated and sent to stdout instead of stderr.  The full\nsymbolic names of the refs will be given.",
				"isString": false
			},
			{
				"name": "delete",
				"aliases": [
					"d"
				],
				"description": "All listed refs are deleted from the remote repository. This is\nthe same as prefixing all refs with a colon.",
				"isString": false
			},
			{
				"name": "tags",
				"aliases": [],
				"description": "All refs under refs/tags are pushed, in\naddition to refspecs explicitly listed on the command\nline.",
				"isString": false
			},
			{
				"name": "follow-tags",
				"aliases": [],
				"description": "Push all the refs that would be pushed without this option,\nand also push annotated tags in refs/tags that are missing\nfrom the remote but are pointing at commit-ish that are\nreachable from the refs being pushed.  This can also be specified\nwith configuration variable push.followTags.  For more\ninformation, see push.followTags in git-config[1].",
				"isString": false
			},
			{
				"name": "signed",
				"aliases": [
					"[no-]signed"
				],
				"description": "GPG-sign the push request to update refs on the receiving\nside, to allow it to be checked by the hooks and/or be\nlogged.  If false or --no-signed, no signing will be\nattempted.  If true or --signed, the push will fail if the\nserver does not support signed pushes.  If set to if-asked,\nsign if and only if the server supports signed pushes.  The push\nwill also fail if the actual call to gpg --sign fails.  See\ngit-receive-pack[1] for the details on the receiving end.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Use an atomic transaction on the remote side if available.\nEither all refs are updated, or on error, no refs are updated.\nIf the server does not support atomic pushes the push will fail.",
				"isString": false
			},
			{
				"name": "push-option",
				"aliases": [
					"o"
				],
				"description": "Transmit the given string to the server, which passes them to\nthe pre-receive as well as the post-receive hook. The given string\nmust not contain a NUL or LF character.\nWhen multiple --push-option=<option> are given, they are\nall sent to the other side in the order listed on the\ncommand line.\nWhen no --push-option=<option> is given from the command\nline, the values of configuration variable push.pushOption\nare used instead.",
				"isString": false
			},
			{
				"name": "receive-pack",
				"aliases": [
					"exec=<git-receive-pack>"
				],
				"description": "Path to the git-receive-pack program on the remote\nend.  Sometimes useful when pushing to a remote\nrepository over ssh, and you do not have the program in\na directory on the default $PATH.",
				"isString": false
			},
			{
				"name": "force-with-lease",
				"aliases": [
					"[no-]force-with-lease",
					"force-with-lease=<refname>"
				],
				"description": "Usually, \"git push\" refuses to update a remote ref that is\nnot an ancestor of the local ref used to overwrite it.\n\nThis option overrides this restriction if the current value of the\nremote ref is the expected value.  \"git push\" fails otherwise.\n\n\nImagine that you have to rebase what you have already published.\nYou will have to bypass the \"must fast-forward\" rule in order to\nreplace the history you originally published with the rebased history.\nIf somebody else built on top of your original history while you are\nrebasing, the tip of the branch at the remote may advance with her\ncommit, and blindly pushing with --force will lose her work.\n\n\nThis option allows you to say that you expect the history you are\nupdating is what you rebased and want to replace. If the remote ref\nstill points at the commit you specified, you can be sure that no\nother people did anything to the ref. It is like taking a \"lease\" on\nthe ref without explicitly locking it, and the remote ref is updated\nonly if the \"lease\" is still valid.\n\n\n--force-with-lease alone, without specifying the details, will protect\nall remote refs that are going to be updated by requiring their\ncurrent value to be the same as the remote-tracking branch we have\nfor them.\n\n\n--force-with-lease=<refname>, without specifying the expected value, will\nprotect the named ref (alone), if it is going to be updated, by\nrequiring its current value to be the same as the remote-tracking\nbranch we have for it.\n\n\n--force-with-lease=<refname>:<expect> will protect the named ref (alone),\nif it is going to be updated, by requiring its current value to be\nthe same as the specified value <expect> (which is allowed to be\ndifferent from the remote-tracking branch we have for the refname,\nor we do not even have to have such a remote-tracking branch when\nthis form is used).  If <expect> is the empty string, then the named ref\nmust not already exist.\n\n\nNote that all forms other than --force-with-lease=<refname>:<expect>\nthat specifies the expected current value of the ref explicitly are\nstill experimental and their semantics may change as we gain experience\nwith this feature.\n\n\n\"--no-force-with-lease\" will cancel all the previous --force-with-lease on the\ncommand line.\n\n\nA general note on safety: supplying this option without an expected\nvalue, i.e. as --force-with-lease or --force-with-lease=<refname>\ninteracts very badly with anything that implicitly runs git fetch on\nthe remote to be pushed to in the background, e.g. git fetch origin\non your repository in a cronjob.\n\n\nThe protection it offers over --force is ensuring that subsequent\nchanges your work wasn’t based on aren’t clobbered, but this is\ntrivially defeated if some background process is updating refs in the\nbackground. We don’t have anything except the remote tracking info to\ngo by as a heuristic for refs you’re expected to have seen & are\nwilling to clobber.\n\n\nIf your editor or some other system is running git fetch in the\nbackground for you a way to mitigate this is to simply set up another\nremote:\n\n\n\ngit remote add origin-push $(git config remote.origin.url)\ngit fetch origin-push\n\n\n\nNow when the background process runs git fetch origin the references\non origin-push won’t be updated, and thus commands like:\n\n\n\ngit push --force-with-lease origin-push\n\n\n\nWill fail unless you manually run git fetch origin-push. This method\nis of course entirely defeated by something that runs git fetch\n--all, in that case you’d need to either disable it or do something\nmore tedious like:\n\n\n\ngit fetch              # update 'master' from remote\ngit tag base master    # mark our base point\ngit rebase -i master   # rewrite some commits\ngit push --force-with-lease=master:base master:master\n\n\n\nI.e. create a base tag for versions of the upstream code that you’ve\nseen and are willing to overwrite, then rewrite history, and finally\nforce push changes to master if the remote version is still at\nbase, regardless of what your local remotes/origin/master has been\nupdated to in the background.\n\n\nAlternatively, specifying --force-if-includes as an ancillary option\nalong with --force-with-lease[=<refname>] (i.e., without saying what\nexact commit the ref on the remote side must be pointing at, or which\nrefs on the remote side are being protected) at the time of \"push\" will\nverify if updates from the remote-tracking refs that may have been\nimplicitly updated in the background are integrated locally before\nallowing a forced update.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "Usually, the command refuses to update a remote ref that is\nnot an ancestor of the local ref used to overwrite it.\nAlso, when --force-with-lease option is used, the command refuses\nto update a remote ref whose current value does not match\nwhat is expected.\n\nThis flag disables these checks, and can cause the remote repository\nto lose commits; use it with care.\n\n\nNote that --force applies to all the refs that are pushed, hence\nusing it with push.default set to matching or with multiple push\ndestinations configured with remote.*.push may overwrite refs\nother than the current branch (including local refs that are\nstrictly behind their remote counterpart).  To force a push to only\none branch, use a + in front of the refspec to push (e.g git push\norigin +master to force a push to the master branch). See the\n<refspec>... section above for details.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Force an update only if the tip of the remote-tracking ref\nhas been integrated locally.\n\nThis option enables a check that verifies if the tip of the\nremote-tracking ref is reachable from one of the \"reflog\" entries of\nthe local branch based in it for a rewrite. The check ensures that any\nupdates from the remote have been incorporated locally by rejecting the\nforced update if that is not the case.\n\n\nIf the option is passed without specifying --force-with-lease, or\nspecified along with --force-with-lease=<refname>:<expect>, it is\na \"no-op\".\n\n\nSpecifying --no-force-if-includes disables this behavior.",
				"isString": false
			},
			{
				"name": "repo",
				"aliases": [],
				"description": "This option is equivalent to the <repository> argument. If both\nare specified, the command-line argument takes precedence.",
				"isString": false
			},
			{
				"name": "set-upstream",
				"aliases": [
					"u"
				],
				"description": "For every branch that is up to date or successfully pushed, add\nupstream (tracking) reference, used by argument-less\ngit-pull[1] and other commands. For more information,\nsee branch.<name>.merge in git-config[1].",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "These options are passed to git-send-pack[1]. A thin transfer\nsignificantly reduces the amount of sent data when the sender and\nreceiver share many of the same objects in common. The default is\n--thin.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Suppress all output, including the listing of updated refs,\nunless an error occurs. Progress is not reported to the standard\nerror stream.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Run verbosely.",
				"isString": false
			},
			{
				"name": "progress",
				"aliases": [],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless -q\nis specified. This flag forces progress status even if the\nstandard error stream is not directed to a terminal.",
				"isString": false
			},
			{
				"name": "recurse-submodules",
				"aliases": [
					"no-recurse-submodules"
				],
				"description": "May be used to make sure all submodule commits used by the\nrevisions to be pushed are available on a remote-tracking branch.\nIf check is used Git will verify that all submodule commits that\nchanged in the revisions to be pushed are available on at least one\nremote of the submodule. If any commits are missing the push will\nbe aborted and exit with non-zero status. If on-demand is used\nall submodules that changed in the revisions to be pushed will be\npushed. If on-demand was not able to push all necessary revisions it will\nalso be aborted and exit with non-zero status. If only is used all\nsubmodules will be recursively pushed while the superproject is left\nunpushed. A value of no or using --no-recurse-submodules can be used\nto override the push.recurseSubmodules configuration variable when no\nsubmodule recursion is required.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Toggle the pre-push hook (see githooks[5]).  The\ndefault is --verify, giving the hook a chance to prevent the\npush.  With --no-verify, the hook is bypassed completely.",
				"isString": false
			},
			{
				"name": "ipv4",
				"aliases": [
					"4"
				],
				"description": "Use IPv4 addresses only, ignoring IPv6 addresses.",
				"isString": false
			},
			{
				"name": "ipv6",
				"aliases": [
					"6"
				],
				"description": "Use IPv6 addresses only, ignoring IPv4 addresses.",
				"isString": false
			}
		]
	},
	{
		"name": "remote",
		"description": "Manage set of tracked repositories",
		"flags": [
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Be a little more verbose and show remote url after name.\nNOTE: This must be placed between remote and subcommand.",
				"isString": false
			}
		]
	},
	{
		"name": "submodule",
		"description": "Initialize, update or inspect submodules",
		"flags": [
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Only print error messages.",
				"isString": false
			},
			{
				"name": "progress",
				"aliases": [],
				"description": "This option is only valid for add and update commands.\nProgress status is reported on the standard error stream\nby default when it is attached to a terminal, unless -q\nis specified. This flag forces progress status even if the\nstandard error stream is not directed to a terminal.",
				"isString": false
			},
			{
				"name": "all",
				"aliases": [],
				"description": "This option is only valid for the deinit command. Unregister all\nsubmodules in the working tree.",
				"isString": false
			},
			{
				"name": "branch",
				"aliases": [
					"b"
				],
				"description": "Branch of repository to add as submodule.\nThe name of the branch is recorded as submodule.<name>.branch in\n.gitmodules for update --remote.  A special value of . is used to\nindicate that the name of the branch in the submodule should be the\nsame name as the current branch in the current repository.  If the\noption is not specified, it defaults to the remote HEAD.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "This option is only valid for add, deinit and update commands.\nWhen running add, allow adding an otherwise ignored submodule path.\nWhen running deinit the submodule working trees will be removed even\nif they contain local changes.\nWhen running update (only effective with the checkout procedure),\nthrow away local changes in submodules when switching to a\ndifferent commit; and always run a checkout operation in the\nsubmodule, even if the commit listed in the index of the\ncontaining repository matches the commit checked out in the\nsubmodule.",
				"isString": false
			},
			{
				"name": "cached",
				"aliases": [],
				"description": "This option is only valid for status and summary commands.  These\ncommands typically use the commit found in the submodule HEAD, but\nwith this option, the commit stored in the index is used instead.",
				"isString": false
			},
			{
				"name": "files",
				"aliases": [],
				"description": "This option is only valid for the summary command. This command\ncompares the commit in the index with that in the submodule HEAD\nwhen this option is used.",
				"isString": false
			},
			{
				"name": "summary-limit",
				"aliases": [
					"n"
				],
				"description": "This option is only valid for the summary command.\nLimit the summary size (number of commits shown in total).\nGiving 0 will disable the summary; a negative number means unlimited\n(the default). This limit only applies to modified submodules. The\nsize is always limited to 1 for added/deleted/typechanged submodules.",
				"isString": false
			},
			{
				"name": "remote",
				"aliases": [],
				"description": "This option is only valid for the update command.  Instead of using\nthe superproject’s recorded SHA-1 to update the submodule, use the\nstatus of the submodule’s remote-tracking branch.  The remote used\nis branch’s remote (branch.<name>.remote), defaulting to origin.\nThe remote branch used defaults to the remote HEAD, but the branch\nname may be overridden by setting the submodule.<name>.branch\noption in either .gitmodules or .git/config (with .git/config\ntaking precedence).\n\nThis works for any of the supported update procedures (--checkout,\n--rebase, etc.).  The only change is the source of the target SHA-1.\nFor example, submodule update --remote --merge will merge upstream\nsubmodule changes into the submodules, while submodule update\n--merge will merge superproject gitlink changes into the submodules.\n\n\nIn order to ensure a current tracking branch state, update --remote\nfetches the submodule’s remote repository before calculating the\nSHA-1.  If you don’t want to fetch, you should use submodule update\n--remote --no-fetch.\n\n\nUse this option to integrate changes from the upstream subproject with\nyour submodule’s current HEAD.  Alternatively, you can run git pull\nfrom the submodule, which is equivalent except for the remote branch\nname: update --remote uses the default upstream repository and\nsubmodule.<name>.branch, while git pull uses the submodule’s\nbranch.<name>.merge.  Prefer submodule.<name>.branch if you want\nto distribute the default upstream branch with the superproject and\nbranch.<name>.merge if you want a more native feel while working in\nthe submodule itself.",
				"isString": false
			},
			{
				"name": "no-fetch",
				"aliases": [
					"N"
				],
				"description": "This option is only valid for the update command.\nDon’t fetch new objects from the remote site.",
				"isString": false
			},
			{
				"name": "checkout",
				"aliases": [],
				"description": "This option is only valid for the update command.\nCheckout the commit recorded in the superproject on a detached HEAD\nin the submodule. This is the default behavior, the main use of\nthis option is to override submodule.$name.update when set to\na value other than checkout.\nIf the key submodule.$name.update is either not explicitly set or\nset to checkout, this option is implicit.",
				"isString": false
			},
			{
				"name": "merge",
				"aliases": [],
				"description": "This option is only valid for the update command.\nMerge the commit recorded in the superproject into the current branch\nof the submodule. If this option is given, the submodule’s HEAD will\nnot be detached. If a merge failure prevents this process, you will\nhave to resolve the resulting conflicts within the submodule with the\nusual conflict resolution tools.\nIf the key submodule.$name.update is set to merge, this option is\nimplicit.",
				"isString": false
			},
			{
				"name": "rebase",
				"aliases": [],
				"description": "This option is only valid for the update command.\nRebase the current branch onto the commit recorded in the\nsuperproject. If this option is given, the submodule’s HEAD will not\nbe detached. If a merge failure prevents this process, you will have\nto resolve these failures with git-rebase[1].\nIf the key submodule.$name.update is set to rebase, this option is\nimplicit.",
				"isString": false
			},
			{
				"name": "init",
				"aliases": [],
				"description": "This option is only valid for the update command.\nInitialize all submodules for which \"git submodule init\" has not been\ncalled so far before updating.",
				"isString": false
			},
			{
				"name": "name",
				"aliases": [],
				"description": "This option is only valid for the add command. It sets the submodule’s\nname to the given string instead of defaulting to its path. The name\nmust be valid as a directory name and may not end with a /.",
				"isString": false
			},
			{
				"name": "reference",
				"aliases": [],
				"description": "This option is only valid for add and update commands.  These\ncommands sometimes need to clone a remote repository. In this case,\nthis option will be passed to the git-clone[1] command.\n\nNOTE: Do not use this option unless you have read the note\nfor git-clone[1]'s --reference, --shared, and --dissociate\noptions carefully.",
				"isString": false
			},
			{
				"name": "dissociate",
				"aliases": [],
				"description": "This option is only valid for add and update commands.  These\ncommands sometimes need to clone a remote repository. In this case,\nthis option will be passed to the git-clone[1] command.\n\nNOTE: see the NOTE for the --reference option.",
				"isString": false
			},
			{
				"name": "recursive",
				"aliases": [],
				"description": "This option is only valid for foreach, update, status and sync commands.\nTraverse submodules recursively. The operation is performed not\nonly in the submodules of the current repo, but also\nin any nested submodules inside those submodules (and so on).",
				"isString": false
			},
			{
				"name": "depth",
				"aliases": [],
				"description": "This option is valid for add and update commands. Create a shallow\nclone with a history truncated to the specified number of revisions.\nSee git-clone[1]",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This option is only valid for the update command.\nThe initial clone of a submodule will use the recommended\nsubmodule.<name>.shallow as provided by the .gitmodules file\nby default. To ignore the suggestions use --no-recommend-shallow.",
				"isString": false
			},
			{
				"name": "jobs",
				"aliases": [
					"j"
				],
				"description": "This option is only valid for the update command.\nClone new submodules in parallel with as many jobs.\nDefaults to the submodule.fetchJobs option.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This option is only valid for the update command.\nClone only one branch during update: HEAD or one specified by --branch.",
				"isString": false
			},
			{
				"name": "<path>…​",
				"aliases": [],
				"description": "Paths to submodule(s). When specified this will restrict the command\nto only operate on the submodules found at the specified paths.\n(This argument is required with add).",
				"isString": true
			}
		]
	},
	{
		"name": "show",
		"description": "Show various types of objects",
		"flags": [
			{
				"name": "<object>…​",
				"aliases": [],
				"description": "The names of objects to show (defaults to HEAD).\nFor a more complete list of ways to spell object names, see\n\"SPECIFYING REVISIONS\" section in gitrevisions[7].",
				"isString": true
			},
			{
				"name": "pretty",
				"aliases": [
					"format=<format>"
				],
				"description": "Pretty-print the contents of the commit logs in a given format,\nwhere <format> can be one of oneline, short, medium,\nfull, fuller, reference, email, raw, format:<string>\nand tformat:<string>.  When <format> is none of the above,\nand has %placeholder in it, it acts as if\n--pretty=tformat:<format> were given.\n\nSee the \"PRETTY FORMATS\" section for some additional details for each\nformat.  When =<format> part is omitted, it defaults to medium.\n\n\nNote: you can specify the default pretty format in the repository\nconfiguration (see git-config[1]).",
				"isString": false
			},
			{
				"name": "abbrev-commit",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal commit object\nname, show a prefix that names the object uniquely.\n\"--abbrev=<n>\" (which also modifies diff output, if it is displayed)\noption can be used to specify the minimum length of the prefix.\n\nThis should make \"--pretty=oneline\" a whole lot more readable for\npeople using 80-column terminals.",
				"isString": false
			},
			{
				"name": "no-abbrev-commit",
				"aliases": [],
				"description": "Show the full 40-byte hexadecimal commit object name. This negates\n--abbrev-commit, either explicit or implied by other options such\nas \"--oneline\". It also overrides the log.abbrevCommit variable.",
				"isString": false
			},
			{
				"name": "oneline",
				"aliases": [],
				"description": "This is a shorthand for \"--pretty=oneline --abbrev-commit\"\nused together.",
				"isString": false
			},
			{
				"name": "encoding",
				"aliases": [],
				"description": "The commit objects record the encoding used for the log message\nin their encoding header; this option can be used to tell the\ncommand to re-code the commit log message in the encoding\npreferred by the user.  For non plumbing commands this\ndefaults to UTF-8. Note that if an object claims to be encoded\nin X and we are outputting in X, we will output the object\nverbatim; this means that invalid sequences in the original\ncommit may be copied to the output.",
				"isString": false
			},
			{
				"name": "expand-tabs",
				"aliases": [
					"expand-tabs",
					"no-expand-tabs"
				],
				"description": "Perform a tab expansion (replace each tab with enough spaces\nto fill to the next display column that is multiple of <n>)\nin the log message before showing it in the output.\n--expand-tabs is a short-hand for --expand-tabs=8, and\n--no-expand-tabs is a short-hand for --expand-tabs=0,\nwhich disables tab expansion.\n\nBy default, tabs are expanded in pretty formats that indent the log\nmessage by 4 spaces (i.e.  medium, which is the default, full,\nand fuller).",
				"isString": false
			},
			{
				"name": "notes",
				"aliases": [],
				"description": "Show the notes (see git-notes[1]) that annotate the\ncommit, when showing the commit log message.  This is the default\nfor git log, git show and git whatchanged commands when\nthere is no --pretty, --format, or --oneline option given\non the command line.\n\nBy default, the notes shown are from the notes refs listed in the\ncore.notesRef and notes.displayRef variables (or corresponding\nenvironment overrides). See git-config[1] for more details.\n\n\nWith an optional <ref> argument, use the ref to find the notes\nto display.  The ref can specify the full refname when it begins\nwith refs/notes/; when it begins with notes/, refs/ and otherwise\nrefs/notes/ is prefixed to form a full name of the ref.\n\n\nMultiple --notes options can be combined to control which notes are\nbeing displayed. Examples: \"--notes=foo\" will show only notes from\n\"refs/notes/foo\"; \"--notes=foo --notes\" will show both notes from\n\"refs/notes/foo\" and from the default notes ref(s).",
				"isString": false
			},
			{
				"name": "no-notes",
				"aliases": [],
				"description": "Do not show notes. This negates the above --notes option, by\nresetting the list of notes refs from which notes are shown.\nOptions are parsed in the order given on the command line, so e.g.\n\"--notes --notes=foo --no-notes --notes=bar\" will only show notes\nfrom \"refs/notes/bar\".",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"show-notes[=<ref>]"
				],
				"description": "These options are deprecated. Use the above --notes/--no-notes\noptions instead.",
				"isString": false
			},
			{
				"name": "show-signature",
				"aliases": [],
				"description": "Check the validity of a signed commit object by passing the signature\nto gpg --verify and show the output.",
				"isString": false
			}
		]
	},
	{
		"name": "log",
		"description": "Show commit logs",
		"flags": [
			{
				"name": "follow",
				"aliases": [],
				"description": "Continue listing the history of a file beyond renames\n(works only for a single file).",
				"isString": false
			},
			{
				"name": "decorate",
				"aliases": [
					"no-decorate"
				],
				"description": "Print out the ref names of any commits that are shown. If short is\nspecified, the ref name prefixes refs/heads/, refs/tags/ and\nrefs/remotes/ will not be printed. If full is specified, the\nfull ref name (including prefix) will be printed. If auto is\nspecified, then if the output is going to a terminal, the ref names\nare shown as if short were given, otherwise no ref names are\nshown. The default option is short.",
				"isString": false
			},
			{
				"name": "decorate-refs-exclude",
				"aliases": [
					"decorate-refs=<pattern>"
				],
				"description": "If no --decorate-refs is given, pretend as if all refs were\nincluded.  For each candidate, do not use it for decoration if it\nmatches any patterns given to --decorate-refs-exclude or if it\ndoesn’t match any of the patterns given to --decorate-refs. The\nlog.excludeDecoration config option allows excluding refs from\nthe decorations, but an explicit --decorate-refs pattern will\noverride a match in log.excludeDecoration.",
				"isString": false
			},
			{
				"name": "source",
				"aliases": [],
				"description": "Print out the ref name given on the command line by which each\ncommit was reached.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"[no-]mailmap"
				],
				"description": "Use mailmap file to map author and committer names and email\naddresses to canonical real names and email addresses. See\ngit-shortlog[1].",
				"isString": false
			},
			{
				"name": "full-diff",
				"aliases": [],
				"description": "Without this flag, git log -p <path>... shows commits that\ntouch the specified paths, and diffs about the same specified\npaths.  With this, the full diff is shown for commits that touch\nthe specified paths; this means that \"<path>…​\" limits only\ncommits, and doesn’t limit diff for those commits.\n\nNote that this affects all diff-based output types, e.g. those\nproduced by --stat, etc.",
				"isString": false
			},
			{
				"name": "log-size",
				"aliases": [],
				"description": "Include a line “log size <number>” in the output for each commit,\nwhere <number> is the length of that commit’s message in bytes.\nIntended to speed up tools that read log messages from git log\noutput by allowing them to allocate space in advance.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"L:<funcname>:<file>"
				],
				"description": "Trace the evolution of the line range given by <start>,<end>,\nor by the function name regex <funcname>, within the <file>. You may\nnot give any pathspec limiters.  This is currently limited to\na walk starting from a single revision, i.e., you may only\ngive zero or one positive revision arguments, and\n<start> and <end> (or <funcname>) must exist in the starting revision.\nYou can specify this option more than once. Implies --patch.\nPatch output can be suppressed using --no-patch, but other diff formats\n(namely --raw, --numstat, --shortstat, --dirstat, --summary,\n--name-only, --name-status, --check) are not currently implemented.\n\n<start> and <end> can take one of these forms:\n\n\n\n\nnumber\n\nIf <start> or <end> is a number, it specifies an\nabsolute line number (lines count from 1).\n\n\n\n/regex/\n\nThis form will use the first line matching the given\nPOSIX regex. If <start> is a regex, it will search from the end of\nthe previous -L range, if any, otherwise from the start of file.\nIf <start> is ^/regex/, it will search from the start of file.\nIf <end> is a regex, it will search\nstarting at the line given by <start>.\n\n\n\n+offset or -offset\n\nThis is only valid for <end> and will specify a number\nof lines before or after the line given by <start>.\n\n\n\n\n\nIf :<funcname> is given in place of <start> and <end>, it is a\nregular expression that denotes the range from the first funcname line\nthat matches <funcname>, up to the next funcname line. :<funcname>\nsearches from the end of the previous -L range, if any, otherwise\nfrom the start of file. ^:<funcname> searches from the start of\nfile. The function names are determined in the same way as git diff\nworks out patch hunk headers (see Defining a custom hunk-header\nin gitattributes[5]).",
				"isString": false
			},
			{
				"name": "<revision range>",
				"aliases": [],
				"description": "Show only commits in the specified revision range.  When no\n<revision range> is specified, it defaults to HEAD (i.e. the\nwhole history leading to the current commit).  origin..HEAD\nspecifies all the commits reachable from the current commit\n(i.e. HEAD), but not from origin. For a complete list of\nways to spell <revision range>, see the Specifying Ranges\nsection of gitrevisions[7].",
				"isString": true
			},
			{
				"name": "[--] <path>…​",
				"aliases": [],
				"description": "Show only commits that are enough to explain how the files\nthat match the specified paths came to be.  See History\nSimplification below for details and other simplification\nmodes.\n\nPaths may need to be prefixed with -- to separate them from\noptions or the revision range, when confusion arises.",
				"isString": true
			}
		]
	},
	{
		"name": "diff",
		"description": "Show changes between commits, commit and working tree, etc",
		"flags": [
			{
				"name": "patch",
				"aliases": [
					"p",
					"u"
				],
				"description": "Generate patch (see section on generating patches).\nThis is the default.",
				"isString": false
			},
			{
				"name": "no-patch",
				"aliases": [
					"s"
				],
				"description": "Suppress diff output. Useful for commands like git show that\nshow the patch by default, or to cancel the effect of --patch.",
				"isString": false
			},
			{
				"name": "unified",
				"aliases": [
					"U<n>"
				],
				"description": "Generate diffs with <n> lines of context instead of\nthe usual three.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "output",
				"aliases": [],
				"description": "Output to a specific file instead of stdout.",
				"isString": false
			},
			{
				"name": "output-indicator-context",
				"aliases": [
					"output-indicator-new=<char>",
					"output-indicator-old=<char>"
				],
				"description": "Specify the character used to indicate new, old or context\nlines in the generated patch. Normally they are +, - and\n' ' respectively.",
				"isString": false
			},
			{
				"name": "raw",
				"aliases": [],
				"description": "Generate the diff in raw format.",
				"isString": false
			},
			{
				"name": "patch-with-raw",
				"aliases": [],
				"description": "Synonym for -p --raw.",
				"isString": false
			},
			{
				"name": "indent-heuristic",
				"aliases": [],
				"description": "Enable the heuristic that shifts diff hunk boundaries to make patches\neasier to read. This is the default.",
				"isString": false
			},
			{
				"name": "no-indent-heuristic",
				"aliases": [],
				"description": "Disable the indent heuristic.",
				"isString": false
			},
			{
				"name": "minimal",
				"aliases": [],
				"description": "Spend extra time to make sure the smallest possible\ndiff is produced.",
				"isString": false
			},
			{
				"name": "patience",
				"aliases": [],
				"description": "Generate a diff using the \"patience diff\" algorithm.",
				"isString": false
			},
			{
				"name": "histogram",
				"aliases": [],
				"description": "Generate a diff using the \"histogram diff\" algorithm.",
				"isString": false
			},
			{
				"name": "anchored",
				"aliases": [],
				"description": "Generate a diff using the \"anchored diff\" algorithm.\n\nThis option may be specified more than once.\n\n\nIf a line exists in both the source and destination, exists only once,\nand starts with this text, this algorithm attempts to prevent it from\nappearing as a deletion or addition in the output. It uses the \"patience\ndiff\" algorithm internally.",
				"isString": false
			},
			{
				"name": "diff-algorithm",
				"aliases": [],
				"description": "Choose a diff algorithm. The variants are as follows:\n\n\n\n\n default, myers \n\nThe basic greedy diff algorithm. Currently, this is the default.\n\n minimal \n\nSpend extra time to make sure the smallest possible diff is\nproduced.\n\n patience \n\nUse \"patience diff\" algorithm when generating patches.\n\n histogram \n\nThis algorithm extends the patience algorithm to \"support\nlow-occurrence common elements\".\n\n\n\n\n\n\nFor instance, if you configured the diff.algorithm variable to a\nnon-default value and want to use the default one, then you\nhave to use --diff-algorithm=default option.",
				"isString": false
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Generate a diffstat. By default, as much space as necessary\nwill be used for the filename part, and the rest for the graph\npart. Maximum width defaults to terminal width, or 80 columns\nif not connected to a terminal, and can be overridden by\n<width>. The width of the filename part can be limited by\ngiving another width <name-width> after a comma. The width\nof the graph part can be limited by using\n--stat-graph-width=<width> (affects all commands generating\na stat graph) or by setting diff.statGraphWidth=<width>\n(does not affect git format-patch).\nBy giving a third parameter <count>, you can limit the\noutput to the first <count> lines, followed by ... if\nthere are more.\n\nThese parameters can also be set individually with --stat-width=<width>,\n--stat-name-width=<name-width> and --stat-count=<count>.",
				"isString": false
			},
			{
				"name": "compact-summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information such\nas file creations or deletions (\"new\" or \"gone\", optionally \"+l\"\nif it’s a symlink) and mode changes (\"+x\" or \"-x\" for adding\nor removing executable bit respectively) in diffstat. The\ninformation is put between the filename part and the graph\npart. Implies --stat.",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows number of added and\ndeleted lines in decimal notation and pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.",
				"isString": false
			},
			{
				"name": "shortstat",
				"aliases": [],
				"description": "Output only the last line of the --stat format containing total\nnumber of modified files, as well as number of added and deleted\nlines.",
				"isString": false
			},
			{
				"name": "dirstat",
				"aliases": [
					"X[<param1,param2,…​>]"
				],
				"description": "Output the distribution of relative amount of changes for each\nsub-directory. The behavior of --dirstat can be customized by\npassing it a comma separated list of parameters.\nThe defaults are controlled by the diff.dirstat configuration\nvariable (see git-config[1]).\nThe following parameters are available:\n\n\n\n\n changes \n\nCompute the dirstat numbers by counting the lines that have been\nremoved from the source, or added to the destination. This ignores\nthe amount of pure code movements within a file.  In other words,\nrearranging lines in a file is not counted as much as other changes.\nThis is the default behavior when no parameter is given.\n\n lines \n\nCompute the dirstat numbers by doing the regular line-based diff\nanalysis, and summing the removed/added line counts. (For binary\nfiles, count 64-byte chunks instead, since binary files have no\nnatural concept of lines). This is a more expensive --dirstat\nbehavior than the changes behavior, but it does count rearranged\nlines within a file as much as other changes. The resulting output\nis consistent with what you get from the other --*stat options.\n\n files \n\nCompute the dirstat numbers by counting the number of files changed.\nEach changed file counts equally in the dirstat analysis. This is\nthe computationally cheapest --dirstat behavior, since it does\nnot have to look at the file contents at all.\n\n cumulative \n\nCount changes in a child directory for the parent directory as well.\nNote that when using cumulative, the sum of the percentages\nreported may exceed 100%. The default (non-cumulative) behavior can\nbe specified with the noncumulative parameter.\n\n <limit> \n\nAn integer parameter specifies a cut-off percent (3% by default).\nDirectories contributing less than this percentage of the changes\nare not shown in the output.\n\n\n\n\n\n\nExample: The following will count changed files, while ignoring\ndirectories with less than 10% of the total amount of changed files,\nand accumulating child directory counts in the parent directories:\n--dirstat=files,10,cumulative.",
				"isString": false
			},
			{
				"name": "cumulative",
				"aliases": [],
				"description": "Synonym for --dirstat=cumulative",
				"isString": false
			},
			{
				"name": "dirstat-by-file",
				"aliases": [],
				"description": "Synonym for --dirstat=files,param1,param2…​",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information\nsuch as creations, renames and mode changes.",
				"isString": false
			},
			{
				"name": "patch-with-stat",
				"aliases": [],
				"description": "Synonym for -p --stat.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When --raw, --numstat, --name-only or --name-status has been\ngiven, do not munge pathnames and use NULs as output field terminators.\n\nWithout this option, pathnames with \"unusual\" characters are quoted as\nexplained for the configuration variable core.quotePath (see\ngit-config[1]).",
				"isString": false
			},
			{
				"name": "name-only",
				"aliases": [],
				"description": "Show only names of changed files.",
				"isString": false
			},
			{
				"name": "name-status",
				"aliases": [],
				"description": "Show only names and status of changed files. See the description\nof the --diff-filter option on what the status letters mean.",
				"isString": false
			},
			{
				"name": "submodule",
				"aliases": [],
				"description": "Specify how differences in submodules are shown.  When specifying\n--submodule=short the short format is used.  This format just\nshows the names of the commits at the beginning and end of the range.\nWhen --submodule or --submodule=log is specified, the log\nformat is used.  This format lists the commits in the range like\ngit-submodule[1] summary does.  When --submodule=diff\nis specified, the diff format is used.  This format shows an\ninline diff of the changes in the submodule contents between the\ncommit range.  Defaults to diff.submodule or the short format\nif the config option is unset.",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Show colored diff.\n--color (i.e. without =<when>) is the same as --color=always.\n<when> can be one of always, never, or auto.\nIt can be changed by the color.ui and color.diff\nconfiguration settings.",
				"isString": false
			},
			{
				"name": "no-color",
				"aliases": [],
				"description": "Turn off colored diff.\nThis can be used to override configuration settings.\nIt is the same as --color=never.",
				"isString": false
			},
			{
				"name": "color-moved",
				"aliases": [],
				"description": "Moved lines of code are colored differently.\nIt can be changed by the diff.colorMoved configuration setting.\nThe <mode> defaults to no if the option is not given\nand to zebra if the option with no mode is given.\nThe mode must be one of:\n\n\n\n\n no \n\nMoved lines are not highlighted.\n\n default \n\nIs a synonym for zebra. This may change to a more sensible mode\nin the future.\n\n plain \n\nAny line that is added in one location and was removed\nin another location will be colored with color.diff.newMoved.\nSimilarly color.diff.oldMoved will be used for removed lines\nthat are added somewhere else in the diff. This mode picks up any\nmoved line, but it is not very useful in a review to determine\nif a block of code was moved without permutation.\n\n blocks \n\nBlocks of moved text of at least 20 alphanumeric characters\nare detected greedily. The detected blocks are\npainted using either the color.diff.{old,new}Moved color.\nAdjacent blocks cannot be told apart.\n\n zebra \n\nBlocks of moved text are detected as in blocks mode. The blocks\nare painted using either the color.diff.{old,new}Moved color or\ncolor.diff.{old,new}MovedAlternative. The change between\nthe two colors indicates that a new block was detected.\n\n dimmed-zebra \n\nSimilar to zebra, but additional dimming of uninteresting parts\nof moved code is performed. The bordering lines of two adjacent\nblocks are considered interesting, the rest is uninteresting.\ndimmed_zebra is a deprecated synonym.",
				"isString": false
			},
			{
				"name": "no-color-moved",
				"aliases": [],
				"description": "Turn off move detection. This can be used to override configuration\nsettings. It is the same as --color-moved=no.",
				"isString": false
			},
			{
				"name": "color-moved-ws",
				"aliases": [],
				"description": "This configures how whitespace is ignored when performing the\nmove detection for --color-moved.\nIt can be set by the diff.colorMovedWS configuration setting.\nThese modes can be given as a comma separated list:\n\n\n\n\n no \n\nDo not ignore whitespace when performing move detection.\n\n ignore-space-at-eol \n\nIgnore changes in whitespace at EOL.\n\n ignore-space-change \n\nIgnore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.\n\n ignore-all-space \n\nIgnore whitespace when comparing lines. This ignores differences\neven if one line has whitespace where the other line has none.\n\n allow-indentation-change \n\nInitially ignore any whitespace in the move detection, then\ngroup the moved code blocks only into a block if the change in\nwhitespace is the same per line. This is incompatible with the\nother modes.",
				"isString": false
			},
			{
				"name": "no-color-moved-ws",
				"aliases": [],
				"description": "Do not ignore whitespace when performing move detection. This can be\nused to override configuration settings. It is the same as\n--color-moved-ws=no.",
				"isString": false
			},
			{
				"name": "word-diff",
				"aliases": [],
				"description": "Show a word diff, using the <mode> to delimit changed words.\nBy default, words are delimited by whitespace; see\n--word-diff-regex below.  The <mode> defaults to plain, and\nmust be one of:\n\n\n\n\n color \n\nHighlight changed words using only colors.  Implies --color.\n\n plain \n\nShow words as [-removed-] and {+added+}.  Makes no\nattempts to escape the delimiters if they appear in the input,\nso the output may be ambiguous.\n\n porcelain \n\nUse a special line-based format intended for script\nconsumption.  Added/removed/unchanged runs are printed in the\nusual unified diff format, starting with a +/-/` `\ncharacter at the beginning of the line and extending to the\nend of the line.  Newlines in the input are represented by a\ntilde ~ on a line of its own.\n\n none \n\nDisable word diff again.\n\n\n\n\n\n\nNote that despite the name of the first mode, color is used to\nhighlight the changed parts in all modes if enabled.",
				"isString": false
			},
			{
				"name": "word-diff-regex",
				"aliases": [],
				"description": "Use <regex> to decide what a word is, instead of considering\nruns of non-whitespace to be a word.  Also implies\n--word-diff unless it was already enabled.\n\nEvery non-overlapping match of the\n<regex> is considered a word.  Anything between these matches is\nconsidered whitespace and ignored(!) for the purposes of finding\ndifferences.  You may want to append |[^[:space:]] to your regular\nexpression to make sure that it matches all non-whitespace characters.\nA match that contains a newline is silently truncated(!) at the\nnewline.\n\n\nFor example, --word-diff-regex=. will treat each character as a word\nand, correspondingly, show differences character by character.\n\n\nThe regex can also be set via a diff driver or configuration option, see\ngitattributes[5] or git-config[1].  Giving it explicitly\noverrides any diff driver or configuration setting.  Diff drivers\noverride configuration settings.",
				"isString": false
			},
			{
				"name": "color-words",
				"aliases": [],
				"description": "Equivalent to --word-diff=color plus (if a regex was\nspecified) --word-diff-regex=<regex>.",
				"isString": false
			},
			{
				"name": "no-renames",
				"aliases": [],
				"description": "Turn off rename detection, even when the configuration\nfile gives the default to do so.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Whether to use empty blobs as rename source.",
				"isString": false
			},
			{
				"name": "check",
				"aliases": [],
				"description": "Warn if changes introduce conflict markers or whitespace errors.\nWhat are considered whitespace errors is controlled by core.whitespace\nconfiguration.  By default, trailing whitespaces (including\nlines that consist solely of whitespaces) and a space character\nthat is immediately followed by a tab character inside the\ninitial indent of the line are considered whitespace errors.\nExits with non-zero status if problems are found. Not compatible\nwith --exit-code.",
				"isString": false
			},
			{
				"name": "ws-error-highlight",
				"aliases": [],
				"description": "Highlight whitespace errors in the context, old or new\nlines of the diff.  Multiple values are separated by comma,\nnone resets previous values, default reset the list to\nnew and all is a shorthand for old,new,context.  When\nthis option is not given, and the configuration variable\ndiff.wsErrorHighlight is not set, only whitespace errors in\nnew lines are highlighted. The whitespace errors are colored\nwith color.diff.whitespace.",
				"isString": false
			},
			{
				"name": "full-index",
				"aliases": [],
				"description": "Instead of the first handful of characters, show the full\npre- and post-image blob object names on the \"index\"\nline when generating patch format output.",
				"isString": false
			},
			{
				"name": "binary",
				"aliases": [],
				"description": "In addition to --full-index, output a binary diff that\ncan be applied with git-apply.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nname in diff-raw format output and diff-tree header\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nIn diff-patch output format, --full-index takes higher\nprecedence, i.e. if --full-index is specified, full blob\nnames will be shown regardless of --abbrev.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "break-rewrites",
				"aliases": [
					"B[<n>][/<m>]"
				],
				"description": "Break complete rewrite changes into pairs of delete and\ncreate. This serves two purposes:\n\nIt affects the way a change that amounts to a total rewrite of a file\nnot as a series of deletion and insertion mixed together with a very\nfew lines that happen to match textually as the context, but as a\nsingle deletion of everything old followed by a single insertion of\neverything new, and the number m controls this aspect of the -B\noption (defaults to 60%). -B/70% specifies that less than 30% of the\noriginal should remain in the result for Git to consider it a total\nrewrite (i.e. otherwise the resulting patch will be a series of\ndeletion and insertion mixed together with context lines).\n\n\nWhen used with -M, a totally-rewritten file is also considered as the\nsource of a rename (usually -M only considers a file that disappeared\nas the source of a rename), and the number n controls this aspect of\nthe -B option (defaults to 50%). -B20% specifies that a change with\naddition and deletion compared to 20% or more of the file’s size are\neligible for being picked up as a possible source of a rename to\nanother file.",
				"isString": false
			},
			{
				"name": "find-renames",
				"aliases": [
					"M[<n>]"
				],
				"description": "Detect renames.\nIf n is specified, it is a threshold on the similarity\nindex (i.e. amount of addition/deletions compared to the\nfile’s size). For example, -M90% means Git should consider a\ndelete/add pair to be a rename if more than 90% of the file\nhasn’t changed.  Without a % sign, the number is to be read as\na fraction, with a decimal point before it.  I.e., -M5 becomes\n0.5, and is thus the same as -M50%.  Similarly, -M05 is\nthe same as -M5%.  To limit detection to exact renames, use\n-M100%.  The default similarity index is 50%.",
				"isString": false
			},
			{
				"name": "find-copies",
				"aliases": [
					"C[<n>]"
				],
				"description": "Detect copies as well as renames.  See also --find-copies-harder.\nIf n is specified, it has the same meaning as for -M<n>.",
				"isString": false
			},
			{
				"name": "find-copies-harder",
				"aliases": [],
				"description": "For performance reasons, by default, -C option finds copies only\nif the original file of the copy was modified in the same\nchangeset.  This flag makes the command\ninspect unmodified files as candidates for the source of\ncopy.  This is a very expensive operation for large\nprojects, so use it with caution.  Giving more than one\n-C option has the same effect.",
				"isString": false
			},
			{
				"name": "irreversible-delete",
				"aliases": [
					"D"
				],
				"description": "Omit the preimage for deletes, i.e. print only the header but not\nthe diff between the preimage and /dev/null. The resulting patch\nis not meant to be applied with patch or git apply; this is\nsolely for people who want to just concentrate on reviewing the\ntext after the change. In addition, the output obviously lacks\nenough information to apply such a patch in reverse, even manually,\nhence the name of the option.\n\nWhen used together with -B, omit also the preimage in the deletion part\nof a delete/create pair.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The -M and -C options require O(n^2) processing time where n\nis the number of potential rename/copy targets.  This\noption prevents rename/copy detection from running if\nthe number of rename/copy targets exceeds the specified\nnumber.",
				"isString": false
			},
			{
				"name": "diff-filter",
				"aliases": [],
				"description": "Select only files that are Added (A), Copied (C),\nDeleted (D), Modified (M), Renamed (R), have their\ntype (i.e. regular file, symlink, submodule, …​) changed (T),\nare Unmerged (U), are\nUnknown (X), or have had their pairing Broken (B).\nAny combination of the filter characters (including none) can be used.\nWhen * (All-or-none) is added to the combination, all\npaths are selected if there is any file that matches\nother criteria in the comparison; if there is no file\nthat matches other criteria, nothing is selected.\n\nAlso, these upper-case letters can be downcased to exclude.  E.g.\n--diff-filter=ad excludes added and deleted paths.\n\n\nNote that not all diffs can feature all types. For instance, diffs\nfrom the index to the working tree can never have Added entries\n(because the set of paths included in the diff is limited by what is in\nthe index).  Similarly, copied and renamed entries cannot appear if\ndetection for those types is disabled.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified string (i.e. addition/deletion) in a file.\nIntended for the scripter’s use.\n\nIt is useful when you’re looking for an exact block of code (like a\nstruct), and want to know the history of that block since it first\ncame into being: use the feature iteratively to feed the interesting\nblock in the preimage back into -S, and keep going until you get the\nvery first version of the block.\n\n\nBinary files are searched as well.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences whose patch text contains added/removed\nlines that match <regex>.\n\nTo illustrate the difference between -S<regex> --pickaxe-regex and\n-G<regex>, consider a commit with the following diff in the same\nfile:\n\n\n\n+    return frotz(nitfol, two->ptr, 1, 0);\n...\n-    hit = frotz(nitfol, mf2.ptr, 1, 0);\n\n\n\nWhile git log -G\"frotz\\(nitfol\" will show this commit, git log\n-S\"frotz\\(nitfol\" --pickaxe-regex will not (because the number of\noccurrences of that string did not change).\n\n\nUnless --text is supplied patches of binary files without a textconv\nfilter will be ignored.\n\n\nSee the pickaxe entry in gitdiffcore[7] for more\ninformation.",
				"isString": false
			},
			{
				"name": "find-object",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified object. Similar to -S, just the argument is different\nin that it doesn’t search for a specific string but for a specific\nobject id.\n\nThe object can be a blob or a submodule commit. It implies the -t option in\ngit-log to also find trees.",
				"isString": false
			},
			{
				"name": "pickaxe-all",
				"aliases": [],
				"description": "When -S or -G finds a change, show all the changes in that\nchangeset, not just the files that contain the change\nin <string>.",
				"isString": false
			},
			{
				"name": "pickaxe-regex",
				"aliases": [],
				"description": "Treat the <string> given to -S as an extended POSIX regular\nexpression to match.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Control the order in which files appear in the output.\nThis overrides the diff.orderFile configuration variable\n(see git-config[1]).  To cancel diff.orderFile,\nuse -O/dev/null.\n\nThe output order is determined by the order of glob patterns in\n<orderfile>.\nAll files with pathnames that match the first pattern are output\nfirst, all files with pathnames that match the second pattern (but not\nthe first) are output next, and so on.\nAll files with pathnames that do not match any pattern are output\nlast, as if there was an implicit match-all pattern at the end of the\nfile.\nIf multiple pathnames have the same rank (they match the same pattern\nbut no earlier patterns), their output order relative to each other is\nthe normal order.\n\n\n<orderfile> is parsed as follows:\n\n\n\n\n\n\nBlank lines are ignored, so they can be used as separators for\nreadability.\n\n\nLines starting with a hash (\"#\") are ignored, so they can be used\nfor comments.  Add a backslash (\"\\\") to the beginning of the\npattern if it starts with a hash.\n\n\nEach other line contains a single pattern.\n\n\n\n\n\n\nPatterns have the same syntax and semantics as patterns used for\nfnmatch(3) without the FNM_PATHNAME flag, except a pathname also\nmatches a pattern if removing any number of the final pathname\ncomponents matches the pattern.  For example, the pattern \"foo*bar\"\nmatches \"fooasdfbar\" and \"foo/bar/baz/asdf\" but not \"foobarx\".",
				"isString": false
			},
			{
				"name": "rotate-to",
				"aliases": [
					"skip-to=<file>"
				],
				"description": "Discard the files before the named <file> from the output\n(i.e. skip to), or move them to the end of the output\n(i.e. rotate to).  These were invented primarily for use\nof the git difftool command, and may not be very useful\notherwise.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Swap two inputs; that is, show differences from index or\non-disk file to tree contents.",
				"isString": false
			},
			{
				"name": "relative",
				"aliases": [
					"no-relative"
				],
				"description": "When run from a subdirectory of the project, it can be\ntold to exclude changes outside the directory and show\npathnames relative to it with this option.  When you are\nnot in a subdirectory (e.g. in a bare repository), you\ncan name which subdirectory to make the output relative\nto by giving a <path> as an argument.\n--no-relative can be used to countermand both diff.relative config\noption and previous --relative.",
				"isString": false
			},
			{
				"name": "text",
				"aliases": [
					"a"
				],
				"description": "Treat all files as text.",
				"isString": false
			},
			{
				"name": "ignore-cr-at-eol",
				"aliases": [],
				"description": "Ignore carriage-return at the end of line when doing a comparison.",
				"isString": false
			},
			{
				"name": "ignore-space-at-eol",
				"aliases": [],
				"description": "Ignore changes in whitespace at EOL.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"b"
				],
				"description": "Ignore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.",
				"isString": false
			},
			{
				"name": "ignore-all-space",
				"aliases": [
					"w"
				],
				"description": "Ignore whitespace when comparing lines.  This ignores\ndifferences even if one line has whitespace where the other\nline has none.",
				"isString": false
			},
			{
				"name": "ignore-blank-lines",
				"aliases": [],
				"description": "Ignore changes whose lines are all blank.",
				"isString": false
			},
			{
				"name": "ignore-matching-lines",
				"aliases": [
					"I<regex>"
				],
				"description": "Ignore changes whose all lines match <regex>.  This option may\nbe specified more than once.",
				"isString": false
			},
			{
				"name": "inter-hunk-context",
				"aliases": [],
				"description": "Show the context between diff hunks, up to the specified number\nof lines, thereby fusing hunks that are close to each other.\nDefaults to diff.interHunkContext or 0 if the config option\nis unset.",
				"isString": false
			},
			{
				"name": "function-context",
				"aliases": [
					"W"
				],
				"description": "Show whole function as context lines for each change.\nThe function names are determined in the same way as\ngit diff works out patch hunk headers (see Defining a\ncustom hunk-header in gitattributes[5]).",
				"isString": false
			},
			{
				"name": "exit-code",
				"aliases": [],
				"description": "Make the program exit with codes similar to diff(1).\nThat is, it exits with 1 if there were differences and\n0 means no differences.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Disable all output of the program. Implies --exit-code.",
				"isString": false
			},
			{
				"name": "ext-diff",
				"aliases": [],
				"description": "Allow an external diff helper to be executed. If you set an\nexternal diff driver with gitattributes[5], you need\nto use this option with git-log[1] and friends.",
				"isString": false
			},
			{
				"name": "no-ext-diff",
				"aliases": [],
				"description": "Disallow external diff drivers.",
				"isString": false
			},
			{
				"name": "no-textconv",
				"aliases": [
					"textconv"
				],
				"description": "Allow (or disallow) external text conversion filters to be run\nwhen comparing binary files. See gitattributes[5] for\ndetails. Because textconv filters are typically a one-way\nconversion, the resulting diff is suitable for human\nconsumption, but cannot be applied. For this reason, textconv\nfilters are enabled by default only for git-diff[1] and\ngit-log[1], but not for git-format-patch[1] or\ndiff plumbing commands.",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Ignore changes to submodules in the diff generation. <when> can be\neither \"none\", \"untracked\", \"dirty\" or \"all\", which is the default.\nUsing \"none\" will consider the submodule modified when it either contains\nuntracked or modified files or its HEAD differs from the commit recorded\nin the superproject and can be used to override any settings of the\nignore option in git-config[1] or gitmodules[5]. When\n\"untracked\" is used submodules are not considered dirty when they only\ncontain untracked content (but they are still scanned for modified\ncontent). Using \"dirty\" ignores all changes to the work tree of submodules,\nonly changes to the commits stored in the superproject are shown (this was\nthe behavior until 1.7.0). Using \"all\" hides all changes to submodules.",
				"isString": false
			},
			{
				"name": "src-prefix",
				"aliases": [],
				"description": "Show the given source prefix instead of \"a/\".",
				"isString": false
			},
			{
				"name": "dst-prefix",
				"aliases": [],
				"description": "Show the given destination prefix instead of \"b/\".",
				"isString": false
			},
			{
				"name": "no-prefix",
				"aliases": [],
				"description": "Do not show any source or destination prefix.",
				"isString": false
			},
			{
				"name": "line-prefix",
				"aliases": [],
				"description": "Prepend an additional prefix to every line of output.",
				"isString": false
			},
			{
				"name": "ita-invisible-in-index",
				"aliases": [],
				"description": "By default entries added by \"git add -N\" appear as an existing\nempty file in \"git diff\" and a new file in \"git diff --cached\".\nThis option makes the entry appear as a new file in \"git diff\"\nand non-existent in \"git diff --cached\". This option could be\nreverted with --ita-visible-in-index. Both options are\nexperimental and could be removed in future.",
				"isString": false
			}
		]
	},
	{
		"name": "difftool",
		"description": "Show changes using common diff tools",
		"flags": [
			{
				"name": "dir-diff",
				"aliases": [
					"d"
				],
				"description": "Copy the modified files to a temporary location and perform\na directory diff on them. This mode never prompts before\nlaunching the diff tool.",
				"isString": false
			},
			{
				"name": "no-prompt",
				"aliases": [
					"y"
				],
				"description": "Do not prompt before launching a diff tool.",
				"isString": false
			},
			{
				"name": "prompt",
				"aliases": [],
				"description": "Prompt before each invocation of the diff tool.\nThis is the default behaviour; the option is provided to\noverride any configuration settings.",
				"isString": false
			},
			{
				"name": "rotate-to",
				"aliases": [],
				"description": "Start showing the diff for the given path,\nthe paths before it will move to end and output.",
				"isString": false
			},
			{
				"name": "skip-to",
				"aliases": [],
				"description": "Start showing the diff for the given path, skipping all\nthe paths before it.",
				"isString": false
			},
			{
				"name": "tool",
				"aliases": [
					"t"
				],
				"description": "Use the diff tool specified by <tool>.  Valid values include\nemerge, kompare, meld, and vimdiff. Run git difftool --tool-help\nfor the list of valid <tool> settings.\n\nIf a diff tool is not specified, git difftool\nwill use the configuration variable diff.tool.  If the\nconfiguration variable diff.tool is not set, git difftool\nwill pick a suitable default.\n\n\nYou can explicitly provide a full path to the tool by setting the\nconfiguration variable difftool.<tool>.path. For example, you\ncan configure the absolute path to kdiff3 by setting\ndifftool.kdiff3.path. Otherwise, git difftool assumes the\ntool is available in PATH.\n\n\nInstead of running one of the known diff tools,\ngit difftool can be customized to run an alternative program\nby specifying the command line to invoke in a configuration\nvariable difftool.<tool>.cmd.\n\n\nWhen git difftool is invoked with this tool (either through the\n-t or --tool option or the diff.tool configuration variable)\nthe configured command line will be invoked with the following\nvariables available: $LOCAL is set to the name of the temporary\nfile containing the contents of the diff pre-image and $REMOTE\nis set to the name of the temporary file containing the contents\nof the diff post-image.  $MERGED is the name of the file which is\nbeing compared. $BASE is provided for compatibility\nwith custom merge tool commands and has the same value as $MERGED.",
				"isString": false
			},
			{
				"name": "tool-help",
				"aliases": [],
				"description": "Print a list of diff tools that may be used with --tool.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "git difftool's default behavior is create symlinks to the\nworking tree when run in --dir-diff mode and the right-hand\nside of the comparison yields the same content as the file in\nthe working tree.\n\nSpecifying --no-symlinks instructs git difftool to create copies\ninstead.  --no-symlinks is the default on Windows.",
				"isString": false
			},
			{
				"name": "extcmd",
				"aliases": [
					"x"
				],
				"description": "Specify a custom command for viewing diffs.\ngit-difftool ignores the configured defaults and runs\n$command $LOCAL $REMOTE when this option is specified.\nAdditionally, $BASE is set in the environment.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"g"
				],
				"description": "When git-difftool is invoked with the -g or --gui option\nthe default diff tool will be read from the configured\ndiff.guitool variable instead of diff.tool. The --no-gui\noption can be used to override this setting. If diff.guitool\nis not set, we will fallback in the order of merge.guitool,\ndiff.tool, merge.tool until a tool is found.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "git-difftool invokes a diff tool individually on each file.\nErrors reported by the diff tool are ignored by default.\nUse --trust-exit-code to make git-difftool exit when an\ninvoked diff tool returns a non-zero exit code.\n\ngit-difftool will forward the exit code of the invoked tool when\n--trust-exit-code is used.",
				"isString": false
			}
		]
	},
	{
		"name": "range-diff",
		"description": "Compare two commit ranges (e.g. two versions of a branch)",
		"flags": [
			{
				"name": "no-dual-color",
				"aliases": [],
				"description": "When the commit diffs differ, git range-diff recreates the\noriginal diffs' coloring, and adds outer -/+ diff markers with\nthe background being red/green to make it easier to see e.g.\nwhen there was a change in what exact lines were added.\n\nAdditionally, the commit diff lines that are only present in the first commit\nrange are shown \"dimmed\" (this can be overridden using the color.diff.<slot>\nconfig setting where <slot> is one of contextDimmed, oldDimmed and\nnewDimmed), and the commit diff lines that are only present in the second\ncommit range are shown in bold (which can be overridden using the config\nsettings color.diff.<slot> with <slot> being one of contextBold,\noldBold or newBold).\n\n\nThis is known to range-diff as \"dual coloring\". Use --no-dual-color\nto revert to color all lines according to the outer diff markers\n(and completely ignore the inner diff when it comes to color).",
				"isString": false
			},
			{
				"name": "creation-factor",
				"aliases": [],
				"description": "Set the creation/deletion cost fudge factor to <percent>.\nDefaults to 60. Try a larger value if git range-diff erroneously\nconsiders a large change a total rewrite (deletion of one commit\nand addition of another), and a smaller one in the reverse case.\nSee the ``Algorithm`` section below for an explanation why this is\nneeded.",
				"isString": false
			},
			{
				"name": "left-only",
				"aliases": [],
				"description": "Suppress commits that are missing from the first specified range\n(or the \"left range\" when using the <rev1>...<rev2> format).",
				"isString": false
			},
			{
				"name": "right-only",
				"aliases": [],
				"description": "Suppress commits that are missing from the second specified range\n(or the \"right range\" when using the <rev1>...<rev2> format).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This flag is passed to the git log program\n(see git-log[1]) that generates the patches.",
				"isString": false
			},
			{
				"name": "<range1> <range2>",
				"aliases": [],
				"description": "Compare the commits specified by the two ranges, where\n<range1> is considered an older version of <range2>.",
				"isString": true
			},
			{
				"name": "<rev1>…​<rev2>",
				"aliases": [],
				"description": "Equivalent to passing <rev2>..<rev1> and <rev1>..<rev2>.",
				"isString": true
			},
			{
				"name": "<base> <rev1> <rev2>",
				"aliases": [],
				"description": "Equivalent to passing <base>..<rev1> and <base>..<rev2>.\nNote that <base> does not need to be the exact branch point\nof the branches. Example: after rebasing a branch my-topic,\ngit range-diff my-topic@{u} my-topic@{1} my-topic would\nshow the differences introduced by the rebase.",
				"isString": true
			}
		]
	},
	{
		"name": "shortlog",
		"description": "Summarize git log output",
		"flags": [
			{
				"name": "numbered",
				"aliases": [
					"n"
				],
				"description": "Sort output according to the number of commits per author instead\nof author alphabetic order.",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [
					"s"
				],
				"description": "Suppress commit description and provide a commit count summary only.",
				"isString": false
			},
			{
				"name": "email",
				"aliases": [
					"e"
				],
				"description": "Show the email address of each author.",
				"isString": false
			},
			{
				"name": "format",
				"aliases": [],
				"description": "Instead of the commit subject, use some other information to\ndescribe each commit.  <format> can be any string accepted\nby the --format option of git log, such as * [%h] %s.\n(See the \"PRETTY FORMATS\" section of git-log[1].)\n\n\nEach pretty-printed commit will be rewrapped before it is shown.",
				"isString": false
			},
			{
				"name": "group",
				"aliases": [],
				"description": "Group commits based on <type>. If no --group option is\nspecified, the default is author. <type> is one of:\n\n\n\n\n\nauthor, commits are grouped by author\n\n\ncommitter, commits are grouped by committer (the same as -c)\n\n\ntrailer:<field>, the <field> is interpreted as a case-insensitive\ncommit message trailer (see git-interpret-trailers[1]). For\nexample, if your project uses Reviewed-by trailers, you might want\nto see who has been reviewing with\ngit shortlog -ns --group=trailer:reviewed-by.\n\nNote that commits that do not include the trailer will not be counted.\nLikewise, commits with multiple trailers (e.g., multiple signoffs) may\nbe counted more than once (but only once per unique trailer value in\nthat commit).\n\n\nShortlog will attempt to parse each trailer value as a name <email>\nidentity. If successful, the mailmap is applied and the email is omitted\nunless the --email option is specified. If the value cannot be parsed\nas an identity, it will be taken literally and completely.\n\n\n\n\n\n\n\nIf --group is specified multiple times, commits are counted under each\nvalue (but again, only once per unique value in that commit). For\nexample, git shortlog --group=author --group=trailer:co-authored-by\ncounts both authors and co-authors.",
				"isString": false
			},
			{
				"name": "committer",
				"aliases": [
					"c"
				],
				"description": "This is an alias for --group=committer.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Linewrap the output by wrapping each line at width.  The first\nline of each entry is indented by indent1 spaces, and the second\nand subsequent lines are indented by indent2 spaces. width,\nindent1, and indent2 default to 76, 6 and 9 respectively.\n\nIf width is 0 (zero) then indent the lines of the output without wrapping\nthem.",
				"isString": false
			},
			{
				"name": "<revision range>",
				"aliases": [],
				"description": "Show only commits in the specified revision range.  When no\n<revision range> is specified, it defaults to HEAD (i.e. the\nwhole history leading to the current commit).  origin..HEAD\nspecifies all the commits reachable from the current commit\n(i.e. HEAD), but not from origin. For a complete list of\nways to spell <revision range>, see the \"Specifying Ranges\"\nsection of gitrevisions[7].",
				"isString": true
			},
			{
				"name": "[--] <path>…​",
				"aliases": [],
				"description": "Consider only commits that are enough to explain how the files\nthat match the specified paths came to be.\n\nPaths may need to be prefixed with -- to separate them from\noptions or the revision range, when confusion arises.",
				"isString": true
			}
		]
	},
	{
		"name": "describe",
		"description": "Give an object a human readable name based on an available ref",
		"flags": [
			{
				"name": "<commit-ish>…​",
				"aliases": [],
				"description": "Commit-ish object names to describe.  Defaults to HEAD if omitted.",
				"isString": true
			},
			{
				"name": "broken",
				"aliases": [
					"dirty[=<mark>]"
				],
				"description": "Describe the state of the working tree.  When the working\ntree matches HEAD, the output is the same as \"git describe\nHEAD\".  If the working tree has local modification \"-dirty\"\nis appended to it.  If a repository is corrupt and Git\ncannot determine if there is local modification, Git will\nerror out, unless ‘--broken’ is given, which appends\nthe suffix \"-broken\" instead.",
				"isString": false
			},
			{
				"name": "all",
				"aliases": [],
				"description": "Instead of using only the annotated tags, use any ref\nfound in refs/ namespace.  This option enables matching\nany known branch, remote-tracking branch, or lightweight tag.",
				"isString": false
			},
			{
				"name": "tags",
				"aliases": [],
				"description": "Instead of using only the annotated tags, use any tag\nfound in refs/tags namespace.  This option enables matching\na lightweight (non-annotated) tag.",
				"isString": false
			},
			{
				"name": "contains",
				"aliases": [],
				"description": "Instead of finding the tag that predates the commit, find\nthe tag that comes after the commit, and thus contains it.\nAutomatically implies --tags.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of using the default 7 hexadecimal digits as the\nabbreviated object name, use <n> digits, or as many digits\nas needed to form a unique object name.  An <n> of 0\nwill suppress long format, only showing the closest tag.",
				"isString": false
			},
			{
				"name": "candidates",
				"aliases": [],
				"description": "Instead of considering only the 10 most recent tags as\ncandidates to describe the input commit-ish consider\nup to <n> candidates.  Increasing <n> above 10 will take\nslightly longer but may produce a more accurate result.\nAn <n> of 0 will cause only exact matches to be output.",
				"isString": false
			},
			{
				"name": "exact-match",
				"aliases": [],
				"description": "Only output exact matches (a tag directly references the\nsupplied commit).  This is a synonym for --candidates=0.",
				"isString": false
			},
			{
				"name": "debug",
				"aliases": [],
				"description": "Verbosely display information about the searching strategy\nbeing employed to standard error.  The tag name will still\nbe printed to standard out.",
				"isString": false
			},
			{
				"name": "long",
				"aliases": [],
				"description": "Always output the long format (the tag, the number of commits\nand the abbreviated commit name) even when it matches a tag.\nThis is useful when you want to see parts of the commit object name\nin \"describe\" output, even when the commit in question happens to be\na tagged version.  Instead of just emitting the tag name, it will\ndescribe such a commit as v1.2-0-gdeadbee (0th commit since tag v1.2\nthat points at object deadbee…​.).",
				"isString": false
			},
			{
				"name": "match",
				"aliases": [],
				"description": "Only consider tags matching the given glob(7) pattern,\nexcluding the \"refs/tags/\" prefix. If used with --all, it also\nconsiders local branches and remote-tracking references matching the\npattern, excluding respectively \"refs/heads/\" and \"refs/remotes/\"\nprefix; references of other types are never considered. If given\nmultiple times, a list of patterns will be accumulated, and tags\nmatching any of the patterns will be considered.  Use --no-match to\nclear and reset the list of patterns.",
				"isString": false
			},
			{
				"name": "exclude",
				"aliases": [],
				"description": "Do not consider tags matching the given glob(7) pattern, excluding\nthe \"refs/tags/\" prefix. If used with --all, it also does not consider\nlocal branches and remote-tracking references matching the pattern,\nexcluding respectively \"refs/heads/\" and \"refs/remotes/\" prefix;\nreferences of other types are never considered. If given multiple times,\na list of patterns will be accumulated and tags matching any of the\npatterns will be excluded. When combined with --match a tag will be\nconsidered when it matches at least one --match pattern and does not\nmatch any of the --exclude patterns. Use --no-exclude to clear and\nreset the list of patterns.",
				"isString": false
			},
			{
				"name": "always",
				"aliases": [],
				"description": "Show uniquely abbreviated commit object as fallback.",
				"isString": false
			},
			{
				"name": "first-parent",
				"aliases": [],
				"description": "Follow only the first parent commit upon seeing a merge commit.\nThis is useful when you wish to not match tags on branches merged\nin the history of the target commit.",
				"isString": false
			}
		]
	},
	{
		"name": "apply",
		"description": "Apply a patch to files and/or to the index",
		"flags": [
			{
				"name": "<patch>…​",
				"aliases": [],
				"description": "The files to read the patch from.  - can be used to read\nfrom the standard input.",
				"isString": true
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Instead of applying the patch, output diffstat for the\ninput.  Turns off \"apply\".",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows the number of added and\ndeleted lines in decimal notation and the pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.  Turns off \"apply\".",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Instead of applying the patch, output a condensed\nsummary of information obtained from git diff extended\nheaders, such as creations, renames and mode changes.\nTurns off \"apply\".",
				"isString": false
			},
			{
				"name": "check",
				"aliases": [],
				"description": "Instead of applying the patch, see if the patch is\napplicable to the current working tree and/or the index\nfile and detects errors.  Turns off \"apply\".",
				"isString": false
			},
			{
				"name": "index",
				"aliases": [],
				"description": "Apply the patch to both the index and the working tree (or\nmerely check that it would apply cleanly to both if --check is\nin effect). Note that --index expects index entries and\nworking tree copies for relevant paths to be identical (their\ncontents and metadata such as file mode must match), and will\nraise an error if they are not, even if the patch would apply\ncleanly to both the index and the working tree in isolation.",
				"isString": false
			},
			{
				"name": "cached",
				"aliases": [],
				"description": "Apply the patch to just the index, without touching the working\ntree. If --check is in effect, merely check that it would\napply cleanly to the index entry.",
				"isString": false
			},
			{
				"name": "intent-to-add",
				"aliases": [],
				"description": "When applying the patch only to the working tree, mark new\nfiles to be added to the index later (see --intent-to-add\noption in git-add[1]). This option is ignored unless\nrunning in a Git repository and --index is not specified.\nNote that --index could be implied by other options such\nas --cached or --3way.",
				"isString": false
			},
			{
				"name": "3way",
				"aliases": [
					"3"
				],
				"description": "When the patch does not apply cleanly, fall back on 3-way merge if\nthe patch records the identity of blobs it is supposed to apply to,\nand we have those blobs available locally, possibly leaving the\nconflict markers in the files in the working tree for the user to\nresolve.  This option implies the --index option, and is incompatible\nwith the --reject and the --cached options.",
				"isString": false
			},
			{
				"name": "build-fake-ancestor",
				"aliases": [],
				"description": "Newer git diff output has embedded index information\nfor each blob to help identify the original version that\nthe patch applies to.  When this flag is given, and if\nthe original versions of the blobs are available locally,\nbuilds a temporary index containing those blobs.\n\nWhen a pure mode change is encountered (which has no index information),\nthe information is read from the current index instead.",
				"isString": false
			},
			{
				"name": "reverse",
				"aliases": [
					"R"
				],
				"description": "Apply the patch in reverse.",
				"isString": false
			},
			{
				"name": "reject",
				"aliases": [],
				"description": "For atomicity, git apply by default fails the whole patch and\ndoes not touch the working tree when some of the hunks\ndo not apply.  This option makes it apply\nthe parts of the patch that are applicable, and leave the\nrejected hunks in corresponding *.rej files.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When --numstat has been given, do not munge pathnames,\nbut use a NUL-terminated machine-readable format.\n\nWithout this option, pathnames with \"unusual\" characters are quoted as\nexplained for the configuration variable core.quotePath (see\ngit-config[1]).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Remove <n> leading path components (separated by slashes) from\ntraditional diff paths. E.g., with -p2, a patch against\na/dir/file will be applied directly to file. The default is\n1.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Ensure at least <n> lines of surrounding context match before\nand after each change.  When fewer lines of surrounding\ncontext exist they all must match.  By default no context is\never ignored.",
				"isString": false
			},
			{
				"name": "unidiff-zero",
				"aliases": [],
				"description": "By default, git apply expects that the patch being\napplied is a unified diff with at least one line of context.\nThis provides good safety measures, but breaks down when\napplying a diff generated with --unified=0. To bypass these\nchecks use --unidiff-zero.\n\nNote, for the reasons stated above usage of context-free patches is\ndiscouraged.",
				"isString": false
			},
			{
				"name": "apply",
				"aliases": [],
				"description": "If you use any of the options marked \"Turns off\napply\" above, git apply reads and outputs the\nrequested information without actually applying the\npatch.  Give this flag after those flags to also apply\nthe patch.",
				"isString": false
			},
			{
				"name": "no-add",
				"aliases": [],
				"description": "When applying a patch, ignore additions made by the\npatch.  This can be used to extract the common part between\ntwo files by first running diff on them and applying\nthe result with this option, which would apply the\ndeletion part but not the addition part.",
				"isString": false
			},
			{
				"name": "allow-binary-replacement",
				"aliases": [
					"binary"
				],
				"description": "Historically we did not allow binary patch applied\nwithout an explicit permission from the user, and this\nflag was the way to do so.  Currently we always allow binary\npatch application, so this is a no-op.",
				"isString": false
			},
			{
				"name": "exclude",
				"aliases": [],
				"description": "Don’t apply changes to files matching the given path pattern. This can\nbe useful when importing patchsets, where you want to exclude certain\nfiles or directories.",
				"isString": false
			},
			{
				"name": "include",
				"aliases": [],
				"description": "Apply changes to files matching the given path pattern. This can\nbe useful when importing patchsets, where you want to include certain\nfiles or directories.\n\nWhen --exclude and --include patterns are used, they are examined in the\norder they appear on the command line, and the first match determines if a\npatch to each path is used.  A patch to a path that does not match any\ninclude/exclude pattern is used by default if there is no include pattern\non the command line, and ignored if there is any include pattern.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"ignore-whitespace"
				],
				"description": "When applying a patch, ignore changes in whitespace in context\nlines if necessary.\nContext lines will preserve their whitespace, and they will not\nundergo whitespace fixing regardless of the value of the\n--whitespace option. New lines will still be fixed, though.",
				"isString": false
			},
			{
				"name": "whitespace",
				"aliases": [],
				"description": "When applying a patch, detect a new or modified line that has\nwhitespace errors.  What are considered whitespace errors is\ncontrolled by core.whitespace configuration.  By default,\ntrailing whitespaces (including lines that solely consist of\nwhitespaces) and a space character that is immediately followed\nby a tab character inside the initial indent of the line are\nconsidered whitespace errors.\n\nBy default, the command outputs warning messages but applies the patch.\nWhen git-apply is used for statistics and not applying a\npatch, it defaults to nowarn.\n\n\nYou can use different <action> values to control this\nbehavior:\n\n\n\n\nnowarn turns off the trailing whitespace warning.\n\n\nwarn outputs warnings for a few such errors, but applies the\npatch as-is (default).\n\n\nfix outputs warnings for a few such errors, and applies the\npatch after fixing them (strip is a synonym --- the tool\nused to consider only trailing whitespace characters as errors, and the\nfix involved stripping them, but modern Gits do more).\n\n\nerror outputs warnings for a few such errors, and refuses\nto apply the patch.\n\n\nerror-all is similar to error but shows all errors.",
				"isString": false
			},
			{
				"name": "inaccurate-eof",
				"aliases": [],
				"description": "Under certain circumstances, some versions of diff do not correctly\ndetect a missing new-line at the end of the file. As a result, patches\ncreated by such diff programs do not record incomplete lines\ncorrectly. This option adds support for applying such patches by\nworking around this bug.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Report progress to stderr. By default, only a message about the\ncurrent patch being applied will be printed. This option will cause\nadditional information to be reported.",
				"isString": false
			},
			{
				"name": "recount",
				"aliases": [],
				"description": "Do not trust the line counts in the hunk headers, but infer them\nby inspecting the patch (e.g. after editing the patch without\nadjusting the hunk headers appropriately).",
				"isString": false
			},
			{
				"name": "directory",
				"aliases": [],
				"description": "Prepend <root> to all filenames.  If a \"-p\" argument was also passed,\nit is applied before prepending the new root.\n\nFor example, a patch that talks about updating a/git-gui.sh to b/git-gui.sh\ncan be applied to the file in the working tree modules/git-gui/git-gui.sh by\nrunning git apply --directory=modules/git-gui.",
				"isString": false
			},
			{
				"name": "unsafe-paths",
				"aliases": [],
				"description": "By default, a patch that affects outside the working area\n(either a Git controlled working tree, or the current working\ndirectory when \"git apply\" is used as a replacement of GNU\npatch) is rejected as a mistake (or a mischief).\n\nWhen git apply is used as a \"better GNU patch\", the user can pass\nthe --unsafe-paths option to override this safety check.  This option\nhas no effect when --index or --cached is in use.",
				"isString": false
			}
		]
	},
	{
		"name": "cherry-pick",
		"description": "Apply the changes introduced by some existing commits",
		"flags": [
			{
				"name": "<commit>…​",
				"aliases": [],
				"description": "Commits to cherry-pick.\nFor a more complete list of ways to spell commits, see\ngitrevisions[7].\nSets of commits can be passed but no traversal is done by\ndefault, as if the --no-walk option was specified, see\ngit-rev-list[1]. Note that specifying a range will\nfeed all <commit>…​ arguments to a single revision walk\n(see a later example that uses maint master..next).",
				"isString": true
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "With this option, git cherry-pick will let you edit the commit\nmessage prior to committing.",
				"isString": false
			},
			{
				"name": "cleanup",
				"aliases": [],
				"description": "This option determines how the commit message will be cleaned up before\nbeing passed on to the commit machinery. See git-commit[1] for more\ndetails. In particular, if the <mode> is given a value of scissors,\nscissors will be appended to MERGE_MSG before being passed on in the case\nof a conflict.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When recording the commit, append a line that says\n\"(cherry picked from commit …​)\" to the original commit\nmessage in order to indicate which commit this change was\ncherry-picked from.  This is done only for cherry\npicks without conflicts.  Do not use this option if\nyou are cherry-picking from your private branch because\nthe information is useless to the recipient.  If on the\nother hand you are cherry-picking between two publicly\nvisible branches (e.g. backporting a fix to a\nmaintenance branch for an older release from a\ndevelopment branch), adding this information can be\nuseful.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "It used to be that the command defaulted to do -x\ndescribed above, and -r was to disable it.  Now the\ndefault is not to do -x so this option is a no-op.",
				"isString": false
			},
			{
				"name": "mainline",
				"aliases": [
					"m"
				],
				"description": "Usually you cannot cherry-pick a merge because you do not know which\nside of the merge should be considered the mainline.  This\noption specifies the parent number (starting from 1) of\nthe mainline and allows cherry-pick to replay the change\nrelative to the specified parent.",
				"isString": false
			},
			{
				"name": "no-commit",
				"aliases": [
					"n"
				],
				"description": "Usually the command automatically creates a sequence of commits.\nThis flag applies the changes necessary to cherry-pick\neach named commit to your working tree and the index,\nwithout making any commit.  In addition, when this\noption is used, your index does not have to match the\nHEAD commit.  The cherry-pick is done against the\nbeginning state of your index.\n\nThis is useful when cherry-picking more than one commits'\neffect to your index in a row.",
				"isString": false
			},
			{
				"name": "signoff",
				"aliases": [
					"s"
				],
				"description": "Add a Signed-off-by trailer at the end of the commit message.\nSee the signoff option in git-commit[1] for more information.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign commits. The keyid argument is optional and\ndefaults to the committer identity; if specified, it must be\nstuck to the option without a space. --no-gpg-sign is useful to\ncountermand both commit.gpgSign configuration variable, and\nearlier --gpg-sign.",
				"isString": false
			},
			{
				"name": "ff",
				"aliases": [],
				"description": "If the current HEAD is the same as the parent of the\ncherry-pick’ed commit, then a fast forward to this commit will\nbe performed.",
				"isString": false
			},
			{
				"name": "allow-empty",
				"aliases": [],
				"description": "By default, cherry-picking an empty commit will fail,\nindicating that an explicit invocation of git commit\n--allow-empty is required. This option overrides that\nbehavior, allowing empty commits to be preserved automatically\nin a cherry-pick. Note that when \"--ff\" is in effect, empty\ncommits that meet the \"fast-forward\" requirement will be kept\neven without this option.  Note also, that use of this option only\nkeeps commits that were initially empty (i.e. the commit recorded the\nsame tree as its parent).  Commits which are made empty due to a\nprevious commit are dropped.  To force the inclusion of those commits\nuse --keep-redundant-commits.",
				"isString": false
			},
			{
				"name": "allow-empty-message",
				"aliases": [],
				"description": "By default, cherry-picking a commit with an empty message will fail.\nThis option overrides that behavior, allowing commits with empty\nmessages to be cherry picked.",
				"isString": false
			},
			{
				"name": "keep-redundant-commits",
				"aliases": [],
				"description": "If a commit being cherry picked duplicates a commit already in the\ncurrent history, it will become empty.  By default these\nredundant commits cause cherry-pick to stop so the user can\nexamine the commit. This option overrides that behavior and\ncreates an empty commit object.  Implies --allow-empty.",
				"isString": false
			},
			{
				"name": "strategy",
				"aliases": [],
				"description": "Use the given merge strategy.  Should only be used once.\nSee the MERGE STRATEGIES section in git-merge[1]\nfor details.",
				"isString": false
			},
			{
				"name": "strategy-option",
				"aliases": [
					"X<option>"
				],
				"description": "Pass the merge strategy-specific option through to the\nmerge strategy.  See git-merge[1] for details.",
				"isString": false
			},
			{
				"name": "no-rerere-autoupdate",
				"aliases": [
					"rerere-autoupdate"
				],
				"description": "Allow the rerere mechanism to update the index with the\nresult of auto-conflict resolution if possible.",
				"isString": false
			}
		]
	},
	{
		"name": "diff",
		"description": "Show changes between commits, commit and working tree, etc",
		"flags": [
			{
				"name": "patch",
				"aliases": [
					"p",
					"u"
				],
				"description": "Generate patch (see section on generating patches).\nThis is the default.",
				"isString": false
			},
			{
				"name": "no-patch",
				"aliases": [
					"s"
				],
				"description": "Suppress diff output. Useful for commands like git show that\nshow the patch by default, or to cancel the effect of --patch.",
				"isString": false
			},
			{
				"name": "unified",
				"aliases": [
					"U<n>"
				],
				"description": "Generate diffs with <n> lines of context instead of\nthe usual three.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "output",
				"aliases": [],
				"description": "Output to a specific file instead of stdout.",
				"isString": false
			},
			{
				"name": "output-indicator-context",
				"aliases": [
					"output-indicator-new=<char>",
					"output-indicator-old=<char>"
				],
				"description": "Specify the character used to indicate new, old or context\nlines in the generated patch. Normally they are +, - and\n' ' respectively.",
				"isString": false
			},
			{
				"name": "raw",
				"aliases": [],
				"description": "Generate the diff in raw format.",
				"isString": false
			},
			{
				"name": "patch-with-raw",
				"aliases": [],
				"description": "Synonym for -p --raw.",
				"isString": false
			},
			{
				"name": "indent-heuristic",
				"aliases": [],
				"description": "Enable the heuristic that shifts diff hunk boundaries to make patches\neasier to read. This is the default.",
				"isString": false
			},
			{
				"name": "no-indent-heuristic",
				"aliases": [],
				"description": "Disable the indent heuristic.",
				"isString": false
			},
			{
				"name": "minimal",
				"aliases": [],
				"description": "Spend extra time to make sure the smallest possible\ndiff is produced.",
				"isString": false
			},
			{
				"name": "patience",
				"aliases": [],
				"description": "Generate a diff using the \"patience diff\" algorithm.",
				"isString": false
			},
			{
				"name": "histogram",
				"aliases": [],
				"description": "Generate a diff using the \"histogram diff\" algorithm.",
				"isString": false
			},
			{
				"name": "anchored",
				"aliases": [],
				"description": "Generate a diff using the \"anchored diff\" algorithm.\n\nThis option may be specified more than once.\n\n\nIf a line exists in both the source and destination, exists only once,\nand starts with this text, this algorithm attempts to prevent it from\nappearing as a deletion or addition in the output. It uses the \"patience\ndiff\" algorithm internally.",
				"isString": false
			},
			{
				"name": "diff-algorithm",
				"aliases": [],
				"description": "Choose a diff algorithm. The variants are as follows:\n\n\n\n\n default, myers \n\nThe basic greedy diff algorithm. Currently, this is the default.\n\n minimal \n\nSpend extra time to make sure the smallest possible diff is\nproduced.\n\n patience \n\nUse \"patience diff\" algorithm when generating patches.\n\n histogram \n\nThis algorithm extends the patience algorithm to \"support\nlow-occurrence common elements\".\n\n\n\n\n\n\nFor instance, if you configured the diff.algorithm variable to a\nnon-default value and want to use the default one, then you\nhave to use --diff-algorithm=default option.",
				"isString": false
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Generate a diffstat. By default, as much space as necessary\nwill be used for the filename part, and the rest for the graph\npart. Maximum width defaults to terminal width, or 80 columns\nif not connected to a terminal, and can be overridden by\n<width>. The width of the filename part can be limited by\ngiving another width <name-width> after a comma. The width\nof the graph part can be limited by using\n--stat-graph-width=<width> (affects all commands generating\na stat graph) or by setting diff.statGraphWidth=<width>\n(does not affect git format-patch).\nBy giving a third parameter <count>, you can limit the\noutput to the first <count> lines, followed by ... if\nthere are more.\n\nThese parameters can also be set individually with --stat-width=<width>,\n--stat-name-width=<name-width> and --stat-count=<count>.",
				"isString": false
			},
			{
				"name": "compact-summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information such\nas file creations or deletions (\"new\" or \"gone\", optionally \"+l\"\nif it’s a symlink) and mode changes (\"+x\" or \"-x\" for adding\nor removing executable bit respectively) in diffstat. The\ninformation is put between the filename part and the graph\npart. Implies --stat.",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows number of added and\ndeleted lines in decimal notation and pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.",
				"isString": false
			},
			{
				"name": "shortstat",
				"aliases": [],
				"description": "Output only the last line of the --stat format containing total\nnumber of modified files, as well as number of added and deleted\nlines.",
				"isString": false
			},
			{
				"name": "dirstat",
				"aliases": [
					"X[<param1,param2,…​>]"
				],
				"description": "Output the distribution of relative amount of changes for each\nsub-directory. The behavior of --dirstat can be customized by\npassing it a comma separated list of parameters.\nThe defaults are controlled by the diff.dirstat configuration\nvariable (see git-config[1]).\nThe following parameters are available:\n\n\n\n\n changes \n\nCompute the dirstat numbers by counting the lines that have been\nremoved from the source, or added to the destination. This ignores\nthe amount of pure code movements within a file.  In other words,\nrearranging lines in a file is not counted as much as other changes.\nThis is the default behavior when no parameter is given.\n\n lines \n\nCompute the dirstat numbers by doing the regular line-based diff\nanalysis, and summing the removed/added line counts. (For binary\nfiles, count 64-byte chunks instead, since binary files have no\nnatural concept of lines). This is a more expensive --dirstat\nbehavior than the changes behavior, but it does count rearranged\nlines within a file as much as other changes. The resulting output\nis consistent with what you get from the other --*stat options.\n\n files \n\nCompute the dirstat numbers by counting the number of files changed.\nEach changed file counts equally in the dirstat analysis. This is\nthe computationally cheapest --dirstat behavior, since it does\nnot have to look at the file contents at all.\n\n cumulative \n\nCount changes in a child directory for the parent directory as well.\nNote that when using cumulative, the sum of the percentages\nreported may exceed 100%. The default (non-cumulative) behavior can\nbe specified with the noncumulative parameter.\n\n <limit> \n\nAn integer parameter specifies a cut-off percent (3% by default).\nDirectories contributing less than this percentage of the changes\nare not shown in the output.\n\n\n\n\n\n\nExample: The following will count changed files, while ignoring\ndirectories with less than 10% of the total amount of changed files,\nand accumulating child directory counts in the parent directories:\n--dirstat=files,10,cumulative.",
				"isString": false
			},
			{
				"name": "cumulative",
				"aliases": [],
				"description": "Synonym for --dirstat=cumulative",
				"isString": false
			},
			{
				"name": "dirstat-by-file",
				"aliases": [],
				"description": "Synonym for --dirstat=files,param1,param2…​",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information\nsuch as creations, renames and mode changes.",
				"isString": false
			},
			{
				"name": "patch-with-stat",
				"aliases": [],
				"description": "Synonym for -p --stat.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When --raw, --numstat, --name-only or --name-status has been\ngiven, do not munge pathnames and use NULs as output field terminators.\n\nWithout this option, pathnames with \"unusual\" characters are quoted as\nexplained for the configuration variable core.quotePath (see\ngit-config[1]).",
				"isString": false
			},
			{
				"name": "name-only",
				"aliases": [],
				"description": "Show only names of changed files.",
				"isString": false
			},
			{
				"name": "name-status",
				"aliases": [],
				"description": "Show only names and status of changed files. See the description\nof the --diff-filter option on what the status letters mean.",
				"isString": false
			},
			{
				"name": "submodule",
				"aliases": [],
				"description": "Specify how differences in submodules are shown.  When specifying\n--submodule=short the short format is used.  This format just\nshows the names of the commits at the beginning and end of the range.\nWhen --submodule or --submodule=log is specified, the log\nformat is used.  This format lists the commits in the range like\ngit-submodule[1] summary does.  When --submodule=diff\nis specified, the diff format is used.  This format shows an\ninline diff of the changes in the submodule contents between the\ncommit range.  Defaults to diff.submodule or the short format\nif the config option is unset.",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Show colored diff.\n--color (i.e. without =<when>) is the same as --color=always.\n<when> can be one of always, never, or auto.\nIt can be changed by the color.ui and color.diff\nconfiguration settings.",
				"isString": false
			},
			{
				"name": "no-color",
				"aliases": [],
				"description": "Turn off colored diff.\nThis can be used to override configuration settings.\nIt is the same as --color=never.",
				"isString": false
			},
			{
				"name": "color-moved",
				"aliases": [],
				"description": "Moved lines of code are colored differently.\nIt can be changed by the diff.colorMoved configuration setting.\nThe <mode> defaults to no if the option is not given\nand to zebra if the option with no mode is given.\nThe mode must be one of:\n\n\n\n\n no \n\nMoved lines are not highlighted.\n\n default \n\nIs a synonym for zebra. This may change to a more sensible mode\nin the future.\n\n plain \n\nAny line that is added in one location and was removed\nin another location will be colored with color.diff.newMoved.\nSimilarly color.diff.oldMoved will be used for removed lines\nthat are added somewhere else in the diff. This mode picks up any\nmoved line, but it is not very useful in a review to determine\nif a block of code was moved without permutation.\n\n blocks \n\nBlocks of moved text of at least 20 alphanumeric characters\nare detected greedily. The detected blocks are\npainted using either the color.diff.{old,new}Moved color.\nAdjacent blocks cannot be told apart.\n\n zebra \n\nBlocks of moved text are detected as in blocks mode. The blocks\nare painted using either the color.diff.{old,new}Moved color or\ncolor.diff.{old,new}MovedAlternative. The change between\nthe two colors indicates that a new block was detected.\n\n dimmed-zebra \n\nSimilar to zebra, but additional dimming of uninteresting parts\nof moved code is performed. The bordering lines of two adjacent\nblocks are considered interesting, the rest is uninteresting.\ndimmed_zebra is a deprecated synonym.",
				"isString": false
			},
			{
				"name": "no-color-moved",
				"aliases": [],
				"description": "Turn off move detection. This can be used to override configuration\nsettings. It is the same as --color-moved=no.",
				"isString": false
			},
			{
				"name": "color-moved-ws",
				"aliases": [],
				"description": "This configures how whitespace is ignored when performing the\nmove detection for --color-moved.\nIt can be set by the diff.colorMovedWS configuration setting.\nThese modes can be given as a comma separated list:\n\n\n\n\n no \n\nDo not ignore whitespace when performing move detection.\n\n ignore-space-at-eol \n\nIgnore changes in whitespace at EOL.\n\n ignore-space-change \n\nIgnore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.\n\n ignore-all-space \n\nIgnore whitespace when comparing lines. This ignores differences\neven if one line has whitespace where the other line has none.\n\n allow-indentation-change \n\nInitially ignore any whitespace in the move detection, then\ngroup the moved code blocks only into a block if the change in\nwhitespace is the same per line. This is incompatible with the\nother modes.",
				"isString": false
			},
			{
				"name": "no-color-moved-ws",
				"aliases": [],
				"description": "Do not ignore whitespace when performing move detection. This can be\nused to override configuration settings. It is the same as\n--color-moved-ws=no.",
				"isString": false
			},
			{
				"name": "word-diff",
				"aliases": [],
				"description": "Show a word diff, using the <mode> to delimit changed words.\nBy default, words are delimited by whitespace; see\n--word-diff-regex below.  The <mode> defaults to plain, and\nmust be one of:\n\n\n\n\n color \n\nHighlight changed words using only colors.  Implies --color.\n\n plain \n\nShow words as [-removed-] and {+added+}.  Makes no\nattempts to escape the delimiters if they appear in the input,\nso the output may be ambiguous.\n\n porcelain \n\nUse a special line-based format intended for script\nconsumption.  Added/removed/unchanged runs are printed in the\nusual unified diff format, starting with a +/-/` `\ncharacter at the beginning of the line and extending to the\nend of the line.  Newlines in the input are represented by a\ntilde ~ on a line of its own.\n\n none \n\nDisable word diff again.\n\n\n\n\n\n\nNote that despite the name of the first mode, color is used to\nhighlight the changed parts in all modes if enabled.",
				"isString": false
			},
			{
				"name": "word-diff-regex",
				"aliases": [],
				"description": "Use <regex> to decide what a word is, instead of considering\nruns of non-whitespace to be a word.  Also implies\n--word-diff unless it was already enabled.\n\nEvery non-overlapping match of the\n<regex> is considered a word.  Anything between these matches is\nconsidered whitespace and ignored(!) for the purposes of finding\ndifferences.  You may want to append |[^[:space:]] to your regular\nexpression to make sure that it matches all non-whitespace characters.\nA match that contains a newline is silently truncated(!) at the\nnewline.\n\n\nFor example, --word-diff-regex=. will treat each character as a word\nand, correspondingly, show differences character by character.\n\n\nThe regex can also be set via a diff driver or configuration option, see\ngitattributes[5] or git-config[1].  Giving it explicitly\noverrides any diff driver or configuration setting.  Diff drivers\noverride configuration settings.",
				"isString": false
			},
			{
				"name": "color-words",
				"aliases": [],
				"description": "Equivalent to --word-diff=color plus (if a regex was\nspecified) --word-diff-regex=<regex>.",
				"isString": false
			},
			{
				"name": "no-renames",
				"aliases": [],
				"description": "Turn off rename detection, even when the configuration\nfile gives the default to do so.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Whether to use empty blobs as rename source.",
				"isString": false
			},
			{
				"name": "check",
				"aliases": [],
				"description": "Warn if changes introduce conflict markers or whitespace errors.\nWhat are considered whitespace errors is controlled by core.whitespace\nconfiguration.  By default, trailing whitespaces (including\nlines that consist solely of whitespaces) and a space character\nthat is immediately followed by a tab character inside the\ninitial indent of the line are considered whitespace errors.\nExits with non-zero status if problems are found. Not compatible\nwith --exit-code.",
				"isString": false
			},
			{
				"name": "ws-error-highlight",
				"aliases": [],
				"description": "Highlight whitespace errors in the context, old or new\nlines of the diff.  Multiple values are separated by comma,\nnone resets previous values, default reset the list to\nnew and all is a shorthand for old,new,context.  When\nthis option is not given, and the configuration variable\ndiff.wsErrorHighlight is not set, only whitespace errors in\nnew lines are highlighted. The whitespace errors are colored\nwith color.diff.whitespace.",
				"isString": false
			},
			{
				"name": "full-index",
				"aliases": [],
				"description": "Instead of the first handful of characters, show the full\npre- and post-image blob object names on the \"index\"\nline when generating patch format output.",
				"isString": false
			},
			{
				"name": "binary",
				"aliases": [],
				"description": "In addition to --full-index, output a binary diff that\ncan be applied with git-apply.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nname in diff-raw format output and diff-tree header\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nIn diff-patch output format, --full-index takes higher\nprecedence, i.e. if --full-index is specified, full blob\nnames will be shown regardless of --abbrev.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "break-rewrites",
				"aliases": [
					"B[<n>][/<m>]"
				],
				"description": "Break complete rewrite changes into pairs of delete and\ncreate. This serves two purposes:\n\nIt affects the way a change that amounts to a total rewrite of a file\nnot as a series of deletion and insertion mixed together with a very\nfew lines that happen to match textually as the context, but as a\nsingle deletion of everything old followed by a single insertion of\neverything new, and the number m controls this aspect of the -B\noption (defaults to 60%). -B/70% specifies that less than 30% of the\noriginal should remain in the result for Git to consider it a total\nrewrite (i.e. otherwise the resulting patch will be a series of\ndeletion and insertion mixed together with context lines).\n\n\nWhen used with -M, a totally-rewritten file is also considered as the\nsource of a rename (usually -M only considers a file that disappeared\nas the source of a rename), and the number n controls this aspect of\nthe -B option (defaults to 50%). -B20% specifies that a change with\naddition and deletion compared to 20% or more of the file’s size are\neligible for being picked up as a possible source of a rename to\nanother file.",
				"isString": false
			},
			{
				"name": "find-renames",
				"aliases": [
					"M[<n>]"
				],
				"description": "Detect renames.\nIf n is specified, it is a threshold on the similarity\nindex (i.e. amount of addition/deletions compared to the\nfile’s size). For example, -M90% means Git should consider a\ndelete/add pair to be a rename if more than 90% of the file\nhasn’t changed.  Without a % sign, the number is to be read as\na fraction, with a decimal point before it.  I.e., -M5 becomes\n0.5, and is thus the same as -M50%.  Similarly, -M05 is\nthe same as -M5%.  To limit detection to exact renames, use\n-M100%.  The default similarity index is 50%.",
				"isString": false
			},
			{
				"name": "find-copies",
				"aliases": [
					"C[<n>]"
				],
				"description": "Detect copies as well as renames.  See also --find-copies-harder.\nIf n is specified, it has the same meaning as for -M<n>.",
				"isString": false
			},
			{
				"name": "find-copies-harder",
				"aliases": [],
				"description": "For performance reasons, by default, -C option finds copies only\nif the original file of the copy was modified in the same\nchangeset.  This flag makes the command\ninspect unmodified files as candidates for the source of\ncopy.  This is a very expensive operation for large\nprojects, so use it with caution.  Giving more than one\n-C option has the same effect.",
				"isString": false
			},
			{
				"name": "irreversible-delete",
				"aliases": [
					"D"
				],
				"description": "Omit the preimage for deletes, i.e. print only the header but not\nthe diff between the preimage and /dev/null. The resulting patch\nis not meant to be applied with patch or git apply; this is\nsolely for people who want to just concentrate on reviewing the\ntext after the change. In addition, the output obviously lacks\nenough information to apply such a patch in reverse, even manually,\nhence the name of the option.\n\nWhen used together with -B, omit also the preimage in the deletion part\nof a delete/create pair.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The -M and -C options require O(n^2) processing time where n\nis the number of potential rename/copy targets.  This\noption prevents rename/copy detection from running if\nthe number of rename/copy targets exceeds the specified\nnumber.",
				"isString": false
			},
			{
				"name": "diff-filter",
				"aliases": [],
				"description": "Select only files that are Added (A), Copied (C),\nDeleted (D), Modified (M), Renamed (R), have their\ntype (i.e. regular file, symlink, submodule, …​) changed (T),\nare Unmerged (U), are\nUnknown (X), or have had their pairing Broken (B).\nAny combination of the filter characters (including none) can be used.\nWhen * (All-or-none) is added to the combination, all\npaths are selected if there is any file that matches\nother criteria in the comparison; if there is no file\nthat matches other criteria, nothing is selected.\n\nAlso, these upper-case letters can be downcased to exclude.  E.g.\n--diff-filter=ad excludes added and deleted paths.\n\n\nNote that not all diffs can feature all types. For instance, diffs\nfrom the index to the working tree can never have Added entries\n(because the set of paths included in the diff is limited by what is in\nthe index).  Similarly, copied and renamed entries cannot appear if\ndetection for those types is disabled.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified string (i.e. addition/deletion) in a file.\nIntended for the scripter’s use.\n\nIt is useful when you’re looking for an exact block of code (like a\nstruct), and want to know the history of that block since it first\ncame into being: use the feature iteratively to feed the interesting\nblock in the preimage back into -S, and keep going until you get the\nvery first version of the block.\n\n\nBinary files are searched as well.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences whose patch text contains added/removed\nlines that match <regex>.\n\nTo illustrate the difference between -S<regex> --pickaxe-regex and\n-G<regex>, consider a commit with the following diff in the same\nfile:\n\n\n\n+    return frotz(nitfol, two->ptr, 1, 0);\n...\n-    hit = frotz(nitfol, mf2.ptr, 1, 0);\n\n\n\nWhile git log -G\"frotz\\(nitfol\" will show this commit, git log\n-S\"frotz\\(nitfol\" --pickaxe-regex will not (because the number of\noccurrences of that string did not change).\n\n\nUnless --text is supplied patches of binary files without a textconv\nfilter will be ignored.\n\n\nSee the pickaxe entry in gitdiffcore[7] for more\ninformation.",
				"isString": false
			},
			{
				"name": "find-object",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified object. Similar to -S, just the argument is different\nin that it doesn’t search for a specific string but for a specific\nobject id.\n\nThe object can be a blob or a submodule commit. It implies the -t option in\ngit-log to also find trees.",
				"isString": false
			},
			{
				"name": "pickaxe-all",
				"aliases": [],
				"description": "When -S or -G finds a change, show all the changes in that\nchangeset, not just the files that contain the change\nin <string>.",
				"isString": false
			},
			{
				"name": "pickaxe-regex",
				"aliases": [],
				"description": "Treat the <string> given to -S as an extended POSIX regular\nexpression to match.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Control the order in which files appear in the output.\nThis overrides the diff.orderFile configuration variable\n(see git-config[1]).  To cancel diff.orderFile,\nuse -O/dev/null.\n\nThe output order is determined by the order of glob patterns in\n<orderfile>.\nAll files with pathnames that match the first pattern are output\nfirst, all files with pathnames that match the second pattern (but not\nthe first) are output next, and so on.\nAll files with pathnames that do not match any pattern are output\nlast, as if there was an implicit match-all pattern at the end of the\nfile.\nIf multiple pathnames have the same rank (they match the same pattern\nbut no earlier patterns), their output order relative to each other is\nthe normal order.\n\n\n<orderfile> is parsed as follows:\n\n\n\n\n\n\nBlank lines are ignored, so they can be used as separators for\nreadability.\n\n\nLines starting with a hash (\"#\") are ignored, so they can be used\nfor comments.  Add a backslash (\"\\\") to the beginning of the\npattern if it starts with a hash.\n\n\nEach other line contains a single pattern.\n\n\n\n\n\n\nPatterns have the same syntax and semantics as patterns used for\nfnmatch(3) without the FNM_PATHNAME flag, except a pathname also\nmatches a pattern if removing any number of the final pathname\ncomponents matches the pattern.  For example, the pattern \"foo*bar\"\nmatches \"fooasdfbar\" and \"foo/bar/baz/asdf\" but not \"foobarx\".",
				"isString": false
			},
			{
				"name": "rotate-to",
				"aliases": [
					"skip-to=<file>"
				],
				"description": "Discard the files before the named <file> from the output\n(i.e. skip to), or move them to the end of the output\n(i.e. rotate to).  These were invented primarily for use\nof the git difftool command, and may not be very useful\notherwise.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Swap two inputs; that is, show differences from index or\non-disk file to tree contents.",
				"isString": false
			},
			{
				"name": "relative",
				"aliases": [
					"no-relative"
				],
				"description": "When run from a subdirectory of the project, it can be\ntold to exclude changes outside the directory and show\npathnames relative to it with this option.  When you are\nnot in a subdirectory (e.g. in a bare repository), you\ncan name which subdirectory to make the output relative\nto by giving a <path> as an argument.\n--no-relative can be used to countermand both diff.relative config\noption and previous --relative.",
				"isString": false
			},
			{
				"name": "text",
				"aliases": [
					"a"
				],
				"description": "Treat all files as text.",
				"isString": false
			},
			{
				"name": "ignore-cr-at-eol",
				"aliases": [],
				"description": "Ignore carriage-return at the end of line when doing a comparison.",
				"isString": false
			},
			{
				"name": "ignore-space-at-eol",
				"aliases": [],
				"description": "Ignore changes in whitespace at EOL.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"b"
				],
				"description": "Ignore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.",
				"isString": false
			},
			{
				"name": "ignore-all-space",
				"aliases": [
					"w"
				],
				"description": "Ignore whitespace when comparing lines.  This ignores\ndifferences even if one line has whitespace where the other\nline has none.",
				"isString": false
			},
			{
				"name": "ignore-blank-lines",
				"aliases": [],
				"description": "Ignore changes whose lines are all blank.",
				"isString": false
			},
			{
				"name": "ignore-matching-lines",
				"aliases": [
					"I<regex>"
				],
				"description": "Ignore changes whose all lines match <regex>.  This option may\nbe specified more than once.",
				"isString": false
			},
			{
				"name": "inter-hunk-context",
				"aliases": [],
				"description": "Show the context between diff hunks, up to the specified number\nof lines, thereby fusing hunks that are close to each other.\nDefaults to diff.interHunkContext or 0 if the config option\nis unset.",
				"isString": false
			},
			{
				"name": "function-context",
				"aliases": [
					"W"
				],
				"description": "Show whole function as context lines for each change.\nThe function names are determined in the same way as\ngit diff works out patch hunk headers (see Defining a\ncustom hunk-header in gitattributes[5]).",
				"isString": false
			},
			{
				"name": "exit-code",
				"aliases": [],
				"description": "Make the program exit with codes similar to diff(1).\nThat is, it exits with 1 if there were differences and\n0 means no differences.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Disable all output of the program. Implies --exit-code.",
				"isString": false
			},
			{
				"name": "ext-diff",
				"aliases": [],
				"description": "Allow an external diff helper to be executed. If you set an\nexternal diff driver with gitattributes[5], you need\nto use this option with git-log[1] and friends.",
				"isString": false
			},
			{
				"name": "no-ext-diff",
				"aliases": [],
				"description": "Disallow external diff drivers.",
				"isString": false
			},
			{
				"name": "no-textconv",
				"aliases": [
					"textconv"
				],
				"description": "Allow (or disallow) external text conversion filters to be run\nwhen comparing binary files. See gitattributes[5] for\ndetails. Because textconv filters are typically a one-way\nconversion, the resulting diff is suitable for human\nconsumption, but cannot be applied. For this reason, textconv\nfilters are enabled by default only for git-diff[1] and\ngit-log[1], but not for git-format-patch[1] or\ndiff plumbing commands.",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Ignore changes to submodules in the diff generation. <when> can be\neither \"none\", \"untracked\", \"dirty\" or \"all\", which is the default.\nUsing \"none\" will consider the submodule modified when it either contains\nuntracked or modified files or its HEAD differs from the commit recorded\nin the superproject and can be used to override any settings of the\nignore option in git-config[1] or gitmodules[5]. When\n\"untracked\" is used submodules are not considered dirty when they only\ncontain untracked content (but they are still scanned for modified\ncontent). Using \"dirty\" ignores all changes to the work tree of submodules,\nonly changes to the commits stored in the superproject are shown (this was\nthe behavior until 1.7.0). Using \"all\" hides all changes to submodules.",
				"isString": false
			},
			{
				"name": "src-prefix",
				"aliases": [],
				"description": "Show the given source prefix instead of \"a/\".",
				"isString": false
			},
			{
				"name": "dst-prefix",
				"aliases": [],
				"description": "Show the given destination prefix instead of \"b/\".",
				"isString": false
			},
			{
				"name": "no-prefix",
				"aliases": [],
				"description": "Do not show any source or destination prefix.",
				"isString": false
			},
			{
				"name": "line-prefix",
				"aliases": [],
				"description": "Prepend an additional prefix to every line of output.",
				"isString": false
			},
			{
				"name": "ita-invisible-in-index",
				"aliases": [],
				"description": "By default entries added by \"git add -N\" appear as an existing\nempty file in \"git diff\" and a new file in \"git diff --cached\".\nThis option makes the entry appear as a new file in \"git diff\"\nand non-existent in \"git diff --cached\". This option could be\nreverted with --ita-visible-in-index. Both options are\nexperimental and could be removed in future.",
				"isString": false
			}
		]
	},
	{
		"name": "rebase",
		"description": "Reapply commits on top of another base tip",
		"flags": [
			{
				"name": "onto",
				"aliases": [],
				"description": "Starting point at which to create the new commits. If the\n--onto option is not specified, the starting point is\n<upstream>.  May be any valid commit, and not just an\nexisting branch name.\n\nAs a special case, you may use \"A...B\" as a shortcut for the\nmerge base of A and B if there is exactly one merge base. You can\nleave out at most one of A and B, in which case it defaults to HEAD.",
				"isString": false
			},
			{
				"name": "keep-base",
				"aliases": [],
				"description": "Set the starting point at which to create the new commits to the\nmerge base of <upstream> <branch>. Running\ngit rebase --keep-base <upstream> <branch> is equivalent to\nrunning git rebase --onto <upstream>…​ <upstream>.\n\nThis option is useful in the case where one is developing a feature on\ntop of an upstream branch. While the feature is being worked on, the\nupstream branch may advance and it may not be the best idea to keep\nrebasing on top of the upstream but to keep the base commit as-is.\n\n\nAlthough both this option and --fork-point find the merge base between\n<upstream> and <branch>, this option uses the merge base as the starting\npoint on which new commits will be created, whereas --fork-point uses\nthe merge base to determine the set of commits which will be rebased.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "<upstream>",
				"aliases": [],
				"description": "Upstream branch to compare against.  May be any valid commit,\nnot just an existing branch name. Defaults to the configured\nupstream for the current branch.",
				"isString": true
			},
			{
				"name": "<branch>",
				"aliases": [],
				"description": "Working branch; defaults to HEAD.",
				"isString": true
			},
			{
				"name": "continue",
				"aliases": [],
				"description": "Restart the rebasing process after having resolved a merge conflict.",
				"isString": false
			},
			{
				"name": "abort",
				"aliases": [],
				"description": "Abort the rebase operation and reset HEAD to the original\nbranch. If <branch> was provided when the rebase operation was\nstarted, then HEAD will be reset to <branch>. Otherwise HEAD\nwill be reset to where it was when the rebase operation was\nstarted.",
				"isString": false
			},
			{
				"name": "quit",
				"aliases": [],
				"description": "Abort the rebase operation but HEAD is not reset back to the\noriginal branch. The index and working tree are also left\nunchanged as a result. If a temporary stash entry was created\nusing --autostash, it will be saved to the stash list.",
				"isString": false
			},
			{
				"name": "apply",
				"aliases": [],
				"description": "Use applying strategies to rebase (calling git-am\ninternally).  This option may become a no-op in the future\nonce the merge backend handles everything the apply one does.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "empty",
				"aliases": [],
				"description": "How to handle commits that are not empty to start and are not\nclean cherry-picks of any upstream commit, but which become\nempty after rebasing (because they contain a subset of already\nupstream changes).  With drop (the default), commits that\nbecome empty are dropped.  With keep, such commits are kept.\nWith ask (implied by --interactive), the rebase will halt when\nan empty commit is applied allowing you to choose whether to\ndrop it, edit files more, or just commit the empty changes.\nOther options, like --exec, will use the default of drop unless\n-i/--interactive is explicitly specified.\n\nNote that commits which start empty are kept (unless --no-keep-empty\nis specified), and commits which are clean cherry-picks (as determined\nby git log --cherry-mark ...) are detected and dropped as a\npreliminary step (unless --reapply-cherry-picks is passed).\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "no-keep-empty",
				"aliases": [
					"keep-empty"
				],
				"description": "Do not keep commits that start empty before the rebase\n(i.e. that do not change anything from its parent) in the\nresult.  The default is to keep commits which start empty,\nsince creating such commits requires passing the --allow-empty\noverride flag to git commit, signifying that a user is very\nintentionally creating such a commit and thus wants to keep\nit.\n\nUsage of this flag will probably be rare, since you can get rid of\ncommits that start empty by just firing up an interactive rebase and\nremoving the lines corresponding to the commits you don’t want.  This\nflag exists as a convenient shortcut, such as for cases where external\ntools generate many empty commits and you want them all removed.\n\n\nFor commits which do not start empty but become empty after rebasing,\nsee the --empty flag.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "no-reapply-cherry-picks",
				"aliases": [
					"reapply-cherry-picks"
				],
				"description": "Reapply all clean cherry-picks of any upstream commit instead\nof preemptively dropping them. (If these commits then become\nempty after rebasing, because they contain a subset of already\nupstream changes, the behavior towards them is controlled by\nthe --empty flag.)\n\nBy default (or if --no-reapply-cherry-picks is given), these commits\nwill be automatically dropped.  Because this necessitates reading all\nupstream commits, this can be expensive in repos with a large number\nof upstream commits that need to be read.\n\n\n--reapply-cherry-picks allows rebase to forgo reading all upstream\ncommits, potentially improving performance.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "allow-empty-message",
				"aliases": [],
				"description": "No-op.  Rebasing commits with an empty message used to fail\nand this option would override that behavior, allowing commits\nwith empty messages to be rebased.  Now commits with an empty\nmessage do not cause rebasing to halt.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "skip",
				"aliases": [],
				"description": "Restart the rebasing process by skipping the current patch.",
				"isString": false
			},
			{
				"name": "edit-todo",
				"aliases": [],
				"description": "Edit the todo list during an interactive rebase.",
				"isString": false
			},
			{
				"name": "show-current-patch",
				"aliases": [],
				"description": "Show the current patch in an interactive rebase or when rebase\nis stopped because of conflicts. This is the equivalent of\ngit show REBASE_HEAD.",
				"isString": false
			},
			{
				"name": "merge",
				"aliases": [
					"m"
				],
				"description": "Use merging strategies to rebase.  When the recursive (default) merge\nstrategy is used, this allows rebase to be aware of renames on the\nupstream side.  This is the default.\n\nNote that a rebase merge works by replaying each commit from the working\nbranch on top of the <upstream> branch.  Because of this, when a merge\nconflict happens, the side reported as ours is the so-far rebased\nseries, starting with <upstream>, and theirs is the working branch.  In\nother words, the sides are swapped.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "strategy",
				"aliases": [
					"s"
				],
				"description": "Use the given merge strategy.\nIf there is no -s option git merge-recursive is used\ninstead.  This implies --merge.\n\nBecause git rebase replays each commit from the working branch\non top of the <upstream> branch using the given strategy, using\nthe ours strategy simply empties all patches from the <branch>,\nwhich makes little sense.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "strategy-option",
				"aliases": [
					"X"
				],
				"description": "Pass the <strategy-option> through to the merge strategy.\nThis implies --merge and, if no strategy has been\nspecified, -s recursive.  Note the reversal of ours and\ntheirs as noted above for the -m option.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "no-rerere-autoupdate",
				"aliases": [
					"rerere-autoupdate"
				],
				"description": "Allow the rerere mechanism to update the index with the\nresult of auto-conflict resolution if possible.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign commits. The keyid argument is optional and\ndefaults to the committer identity; if specified, it must be\nstuck to the option without a space. --no-gpg-sign is useful to\ncountermand both commit.gpgSign configuration variable, and\nearlier --gpg-sign.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Be quiet. Implies --no-stat.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Be verbose. Implies --stat.",
				"isString": false
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Show a diffstat of what changed upstream since the last rebase. The\ndiffstat is also controlled by the configuration option rebase.stat.",
				"isString": false
			},
			{
				"name": "no-stat",
				"aliases": [
					"n"
				],
				"description": "Do not show a diffstat as part of the rebase process.",
				"isString": false
			},
			{
				"name": "no-verify",
				"aliases": [],
				"description": "This option bypasses the pre-rebase hook.  See also githooks[5].",
				"isString": false
			},
			{
				"name": "verify",
				"aliases": [],
				"description": "Allows the pre-rebase hook to run, which is the default.  This option can\nbe used to override --no-verify.  See also githooks[5].",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Ensure at least <n> lines of surrounding context match before\nand after each change.  When fewer lines of surrounding\ncontext exist they all must match.  By default no context is\never ignored.  Implies --apply.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "force-rebase",
				"aliases": [
					"no-ff",
					"f"
				],
				"description": "Individually replay all rebased commits instead of fast-forwarding\nover the unchanged ones.  This ensures that the entire history of\nthe rebased branch is composed of new commits.\n\nYou may find this helpful after reverting a topic branch merge, as this option\nrecreates the topic branch with fresh commits so it can be remerged\nsuccessfully without needing to \"revert the reversion\" (see the\nrevert-a-faulty-merge How-To for\ndetails).",
				"isString": false
			},
			{
				"name": "no-fork-point",
				"aliases": [
					"fork-point"
				],
				"description": "Use reflog to find a better common ancestor between <upstream>\nand <branch> when calculating which commits have been\nintroduced by <branch>.\n\nWhen --fork-point is active, fork_point will be used instead of\n<upstream> to calculate the set of commits to rebase, where\nfork_point is the result of git merge-base --fork-point <upstream>\n<branch> command (see git-merge-base[1]).  If fork_point\nends up being empty, the <upstream> will be used as a fallback.\n\n\nIf <upstream> is given on the command line, then the default is\n--no-fork-point, otherwise the default is --fork-point.\n\n\nIf your branch was based on <upstream> but <upstream> was rewound and\nyour branch contains commits which were dropped, this option can be used\nwith --keep-base in order to drop those commits from your branch.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "ignore-whitespace",
				"aliases": [],
				"description": "Ignore whitespace differences when trying to reconcile\ndifferences. Currently, each backend implements an approximation of\nthis behavior:\n\napply backend: When applying a patch, ignore changes in whitespace in\ncontext lines. Unfortunately, this means that if the \"old\" lines being\nreplaced by the patch differ only in whitespace from the existing\nfile, you will get a merge conflict instead of a successful patch\napplication.\n\n\nmerge backend: Treat lines with only whitespace changes as unchanged\nwhen merging. Unfortunately, this means that any patch hunks that were\nintended to modify whitespace and nothing else will be dropped, even\nif the other side had no changes that conflicted.",
				"isString": false
			},
			{
				"name": "whitespace",
				"aliases": [],
				"description": "This flag is passed to the git apply program\n(see git-apply[1]) that applies the patch.\nImplies --apply.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "committer-date-is-author-date",
				"aliases": [],
				"description": "Instead of using the current time as the committer date, use\nthe author date of the commit being rebased as the committer\ndate. This option implies --force-rebase.",
				"isString": false
			},
			{
				"name": "reset-author-date",
				"aliases": [
					"ignore-date"
				],
				"description": "Instead of using the author date of the original commit, use\nthe current time as the\tauthor date of the rebased commit.  This\noption implies --force-rebase.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "signoff",
				"aliases": [],
				"description": "Add a Signed-off-by trailer to all the rebased commits. Note\nthat if --interactive is given then only commits marked to be\npicked, edited or reworded will have the trailer added.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "interactive",
				"aliases": [
					"i"
				],
				"description": "Make a list of the commits which are about to be rebased.  Let the\nuser edit that list before rebasing.  This mode can also be used to\nsplit commits (see SPLITTING COMMITS below).\n\nThe commit list format can be changed by setting the configuration option\nrebase.instructionFormat.  A customized instruction format will automatically\nhave the long commit hash prepended to the format.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "rebase-merges",
				"aliases": [
					"r"
				],
				"description": "By default, a rebase will simply drop merge commits from the todo\nlist, and put the rebased commits into a single, linear branch.\nWith --rebase-merges, the rebase will instead try to preserve\nthe branching structure within the commits that are to be rebased,\nby recreating the merge commits. Any resolved merge conflicts or\nmanual amendments in these merge commits will have to be\nresolved/re-applied manually.\n\nBy default, or when no-rebase-cousins was specified, commits which do not\nhave <upstream> as direct ancestor will keep their original branch point,\ni.e. commits that would be excluded by git-log[1]'s\n--ancestry-path option will keep their original ancestry by default. If\nthe rebase-cousins mode is turned on, such commits are instead rebased\nonto <upstream> (or <onto>, if specified).\n\n\nThe --rebase-merges mode is similar in spirit to the deprecated\n--preserve-merges but works with interactive rebases,\nwhere commits can be reordered, inserted and dropped at will.\n\n\nIt is currently only possible to recreate the merge commits using the\nrecursive merge strategy; Different merge strategies can be used only via\nexplicit exec git merge -s <strategy> [...] commands.\n\n\nSee also REBASING MERGES and INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "preserve-merges",
				"aliases": [
					"p"
				],
				"description": "[DEPRECATED: use --rebase-merges instead] Recreate merge commits\ninstead of flattening the history by replaying commits a merge commit\nintroduces. Merge conflict resolutions or manual amendments to merge\ncommits are not preserved.\n\nThis uses the --interactive machinery internally, but combining it\nwith the --interactive option explicitly is generally not a good\nidea unless you know what you are doing (see BUGS below).\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "exec",
				"aliases": [
					"x"
				],
				"description": "Append \"exec <cmd>\" after each line creating a commit in the\nfinal history. <cmd> will be interpreted as one or more shell\ncommands. Any command that fails will interrupt the rebase,\nwith exit code 1.\n\nYou may execute several commands by either using one instance of --exec\nwith several commands:\n\n\n\ngit rebase -i --exec \"cmd1 && cmd2 && ...\"\n\n\n\nor by giving more than one --exec:\n\n\n\ngit rebase -i --exec \"cmd1\" --exec \"cmd2\" --exec ...\n\n\n\nIf --autosquash is used, \"exec\" lines will not be appended for\nthe intermediate commits, and will only appear at the end of each\nsquash/fixup series.\n\n\nThis uses the --interactive machinery internally, but it can be run\nwithout an explicit --interactive.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "root",
				"aliases": [],
				"description": "Rebase all commits reachable from <branch>, instead of\nlimiting them with an <upstream>.  This allows you to rebase\nthe root commit(s) on a branch.  When used with --onto, it\nwill skip changes already contained in <newbase> (instead of\n<upstream>) whereas without --onto it will operate on every change.\nWhen used together with both --onto and --preserve-merges,\nall root commits will be rewritten to have <newbase> as parent\ninstead.\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "no-autosquash",
				"aliases": [
					"autosquash"
				],
				"description": "When the commit log message begins with \"squash! …​\" (or\n\"fixup! …​\"), and there is already a commit in the todo list that\nmatches the same ..., automatically modify the todo list of rebase\n-i so that the commit marked for squashing comes right after the\ncommit to be modified, and change the action of the moved commit\nfrom pick to squash (or fixup).  A commit matches the ... if\nthe commit subject matches, or if the ... refers to the commit’s\nhash. As a fall-back, partial matches of the commit subject work,\ntoo.  The recommended way to create fixup/squash commits is by using\nthe --fixup/--squash options of git-commit[1].\n\nIf the --autosquash option is enabled by default using the\nconfiguration variable rebase.autoSquash, this option can be\nused to override and disable this setting.\n\n\nSee also INCOMPATIBLE OPTIONS below.",
				"isString": false
			},
			{
				"name": "no-autostash",
				"aliases": [
					"autostash"
				],
				"description": "Automatically create a temporary stash entry before the operation\nbegins, and apply it after the operation ends.  This means\nthat you can run rebase on a dirty worktree.  However, use\nwith care: the final stash application after a successful\nrebase might result in non-trivial conflicts.",
				"isString": false
			},
			{
				"name": "no-reschedule-failed-exec",
				"aliases": [
					"reschedule-failed-exec"
				],
				"description": "Automatically reschedule exec commands that failed. This only makes\nsense in interactive mode (or when an --exec option was provided).",
				"isString": false
			}
		]
	},
	{
		"name": "revert",
		"description": "Revert some existing commits",
		"flags": [
			{
				"name": "<commit>…​",
				"aliases": [],
				"description": "Commits to revert.\nFor a more complete list of ways to spell commit names, see\ngitrevisions[7].\nSets of commits can also be given but no traversal is done by\ndefault, see git-rev-list[1] and its --no-walk\noption.",
				"isString": true
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "With this option, git revert will let you edit the commit\nmessage prior to committing the revert. This is the default if\nyou run the command from a terminal.",
				"isString": false
			},
			{
				"name": "mainline",
				"aliases": [
					"m"
				],
				"description": "Usually you cannot revert a merge because you do not know which\nside of the merge should be considered the mainline.  This\noption specifies the parent number (starting from 1) of\nthe mainline and allows revert to reverse the change\nrelative to the specified parent.\n\nReverting a merge commit declares that you will never want the tree changes\nbrought in by the merge.  As a result, later merges will only bring in tree\nchanges introduced by commits that are not ancestors of the previously\nreverted merge.  This may or may not be what you want.\n\n\nSee the revert-a-faulty-merge How-To for\nmore details.",
				"isString": false
			},
			{
				"name": "no-edit",
				"aliases": [],
				"description": "With this option, git revert will not start the commit\nmessage editor.",
				"isString": false
			},
			{
				"name": "cleanup",
				"aliases": [],
				"description": "This option determines how the commit message will be cleaned up before\nbeing passed on to the commit machinery. See git-commit[1] for more\ndetails. In particular, if the <mode> is given a value of scissors,\nscissors will be appended to MERGE_MSG before being passed on in the case\nof a conflict.",
				"isString": false
			},
			{
				"name": "no-commit",
				"aliases": [
					"n"
				],
				"description": "Usually the command automatically creates some commits with\ncommit log messages stating which commits were\nreverted.  This flag applies the changes necessary\nto revert the named commits to your working tree\nand the index, but does not make the commits.  In addition,\nwhen this option is used, your index does not have to match\nthe HEAD commit.  The revert is done against the\nbeginning state of your index.\n\nThis is useful when reverting more than one commits'\neffect to your index in a row.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign commits. The keyid argument is optional and\ndefaults to the committer identity; if specified, it must be\nstuck to the option without a space. --no-gpg-sign is useful to\ncountermand both commit.gpgSign configuration variable, and\nearlier --gpg-sign.",
				"isString": false
			},
			{
				"name": "signoff",
				"aliases": [
					"s"
				],
				"description": "Add a Signed-off-by trailer at the end of the commit message.\nSee the signoff option in git-commit[1] for more information.",
				"isString": false
			},
			{
				"name": "strategy",
				"aliases": [],
				"description": "Use the given merge strategy.  Should only be used once.\nSee the MERGE STRATEGIES section in git-merge[1]\nfor details.",
				"isString": false
			},
			{
				"name": "strategy-option",
				"aliases": [
					"X<option>"
				],
				"description": "Pass the merge strategy-specific option through to the\nmerge strategy.  See git-merge[1] for details.",
				"isString": false
			},
			{
				"name": "no-rerere-autoupdate",
				"aliases": [
					"rerere-autoupdate"
				],
				"description": "Allow the rerere mechanism to update the index with the\nresult of auto-conflict resolution if possible.",
				"isString": false
			}
		]
	},
	{
		"name": "bisect",
		"description": "Use binary search to find the commit that introduced a bug",
		"flags": [
			{
				"name": "no-checkout",
				"aliases": [],
				"description": "Do not checkout the new working tree at each iteration of the bisection\nprocess. Instead just update a special reference named BISECT_HEAD to make\nit point to the commit that should be tested.\n\n\nThis option may be useful when the test you would perform in each step\ndoes not require a checked out tree.\n\n\nIf the repository is bare, --no-checkout is assumed.",
				"isString": false
			},
			{
				"name": "first-parent",
				"aliases": [],
				"description": "Follow only the first parent commit upon seeing a merge commit.\n\n\nIn detecting regressions introduced through the merging of a branch, the merge\ncommit will be identified as introduction of the bug and its ancestors will be\nignored.\n\n\nThis option is particularly useful in avoiding false positives when a merged\nbranch contained broken or non-buildable commits, but the merge itself was OK.",
				"isString": false
			}
		]
	},
	{
		"name": "blame",
		"description": "Show what revision and author last modified each line of a file",
		"flags": [
			{
				"name": "",
				"aliases": [],
				"description": "Show blank SHA-1 for boundary commits.  This can also\nbe controlled via the blame.blankBoundary config option.",
				"isString": false
			},
			{
				"name": "root",
				"aliases": [],
				"description": "Do not treat root commits as boundaries.  This can also be\ncontrolled via the blame.showRoot config option.",
				"isString": false
			},
			{
				"name": "show-stats",
				"aliases": [],
				"description": "Include additional statistics at the end of blame output.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"L"
				],
				"description": "Annotate only the line range given by <start>,<end>,\nor by the function name regex <funcname>.\nMay be specified multiple times. Overlapping ranges are allowed.\n\n<start> and <end> are optional. -L <start> or -L <start>, spans from\n<start> to end of file. -L ,<end> spans from start of file to <end>.\n\n\n<start> and <end> can take one of these forms:\n\n\n\n\nnumber\n\nIf <start> or <end> is a number, it specifies an\nabsolute line number (lines count from 1).\n\n\n\n/regex/\n\nThis form will use the first line matching the given\nPOSIX regex. If <start> is a regex, it will search from the end of\nthe previous -L range, if any, otherwise from the start of file.\nIf <start> is ^/regex/, it will search from the start of file.\nIf <end> is a regex, it will search\nstarting at the line given by <start>.\n\n\n\n+offset or -offset\n\nThis is only valid for <end> and will specify a number\nof lines before or after the line given by <start>.\n\n\n\n\n\nIf :<funcname> is given in place of <start> and <end>, it is a\nregular expression that denotes the range from the first funcname line\nthat matches <funcname>, up to the next funcname line. :<funcname>\nsearches from the end of the previous -L range, if any, otherwise\nfrom the start of file. ^:<funcname> searches from the start of\nfile. The function names are determined in the same way as git diff\nworks out patch hunk headers (see Defining a custom hunk-header\nin gitattributes[5]).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show long rev (Default: off).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show raw timestamp (Default: off).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Use revisions from revs-file instead of calling git-rev-list[1].",
				"isString": false
			},
			{
				"name": "reverse",
				"aliases": [],
				"description": "Walk history forward instead of backward. Instead of showing\nthe revision in which a line appeared, this shows the last\nrevision in which a line has existed. This requires a range of\nrevision like START..END where the path to blame exists in\nSTART.  git blame --reverse START is taken as git blame\n--reverse START..HEAD for convenience.",
				"isString": false
			},
			{
				"name": "first-parent",
				"aliases": [],
				"description": "Follow only the first parent commit upon seeing a merge\ncommit. This option can be used to determine when a line\nwas introduced to a particular integration branch, rather\nthan when it was introduced to the history overall.",
				"isString": false
			},
			{
				"name": "porcelain",
				"aliases": [
					"p"
				],
				"description": "Show in a format designed for machine consumption.",
				"isString": false
			},
			{
				"name": "line-porcelain",
				"aliases": [],
				"description": "Show the porcelain format, but output commit information for\neach line, not just the first time a commit is referenced.\nImplies --porcelain.",
				"isString": false
			},
			{
				"name": "incremental",
				"aliases": [],
				"description": "Show the result incrementally in a format designed for\nmachine consumption.",
				"isString": false
			},
			{
				"name": "encoding",
				"aliases": [],
				"description": "Specifies the encoding used to output author names\nand commit summaries. Setting it to none makes blame\noutput unconverted data. For more information see the\ndiscussion about encoding in the git-log[1]\nmanual page.",
				"isString": false
			},
			{
				"name": "contents",
				"aliases": [],
				"description": "When <rev> is not specified, the command annotates the\nchanges starting backwards from the working tree copy.\nThis flag makes the command pretend as if the working\ntree copy has the contents of the named file (specify\n- to make the command read from the standard input).",
				"isString": false
			},
			{
				"name": "date",
				"aliases": [],
				"description": "Specifies the format used to output dates. If --date is not\nprovided, the value of the blame.date config variable is\nused. If the blame.date config variable is also not set, the\niso format is used. For supported values, see the discussion\nof the --date option at git-log[1].",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal. This flag\nenables progress reporting even if not attached to a\nterminal. Can’t use --progress together with --porcelain\nor --incremental.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Detect moved or copied lines within a file. When a commit\nmoves or copies a block of lines (e.g. the original file\nhas A and then B, and the commit changes it to B and then\nA), the traditional blame algorithm notices only half of\nthe movement and typically blames the lines that were moved\nup (i.e. B) to the parent and assigns blame to the lines that\nwere moved down (i.e. A) to the child commit.  With this\noption, both groups of lines are blamed on the parent by\nrunning extra passes of inspection.\n\n<num> is optional but it is the lower bound on the number of\nalphanumeric characters that Git must detect as moving/copying\nwithin a file for it to associate those lines with the parent\ncommit. The default value is 20.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "In addition to -M, detect lines moved or copied from other\nfiles that were modified in the same commit.  This is\nuseful when you reorganize your program and move code\naround across files.  When this option is given twice,\nthe command additionally looks for copies from other\nfiles in the commit that creates the file. When this\noption is given three times, the command additionally\nlooks for copies from other files in any commit.\n\n<num> is optional but it is the lower bound on the number of\nalphanumeric characters that Git must detect as moving/copying\nbetween files for it to associate those lines with the parent\ncommit. And the default value is 40. If there are more than one\n-C options given, the <num> argument of the last -C will\ntake effect.",
				"isString": false
			},
			{
				"name": "ignore-rev",
				"aliases": [],
				"description": "Ignore changes made by the revision when assigning blame, as if the\nchange never happened.  Lines that were changed or added by an ignored\ncommit will be blamed on the previous commit that changed that line or\nnearby lines.  This option may be specified multiple times to ignore\nmore than one revision.  If the blame.markIgnoredLines config option\nis set, then lines that were changed by an ignored commit and attributed to\nanother commit will be marked with a ? in the blame output.  If the\nblame.markUnblamableLines config option is set, then those lines touched\nby an ignored commit that we could not attribute to another revision are\nmarked with a *.",
				"isString": false
			},
			{
				"name": "ignore-revs-file",
				"aliases": [],
				"description": "Ignore revisions listed in file, which must be in the same format as an\nfsck.skipList.  This option may be repeated, and these files will be\nprocessed after any files specified with the blame.ignoreRevsFile config\noption.  An empty file name, \"\", will clear the list of revs from\npreviously processed files.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show help message.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Use the same output mode as git-annotate[1] (Default: off).",
				"isString": false
			},
			{
				"name": "score-debug",
				"aliases": [],
				"description": "Include debugging information related to the movement of\nlines between files (see -C) and lines moved within a\nfile (see -M).  The first number listed is the score.\nThis is the number of alphanumeric characters detected\nas having been moved between or within files.  This must be above\na certain threshold for git blame to consider those lines\nof code to have been moved.",
				"isString": false
			},
			{
				"name": "show-name",
				"aliases": [
					"f"
				],
				"description": "Show the filename in the original commit.  By default\nthe filename is shown if there is any line that came from a\nfile with a different name, due to rename detection.",
				"isString": false
			},
			{
				"name": "show-number",
				"aliases": [
					"n"
				],
				"description": "Show the line number in the original commit (Default: off).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Suppress the author name and timestamp from the output.",
				"isString": false
			},
			{
				"name": "show-email",
				"aliases": [
					"e"
				],
				"description": "Show the author email instead of author name (Default: off).\nThis can also be controlled via the blame.showEmail config\noption.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Ignore whitespace when comparing the parent’s version and\nthe child’s to find where the lines came from.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of using the default 7+1 hexadecimal digits as the\nabbreviated object name, use <m>+1 digits, where <m> is at\nleast <n> but ensures the commit object names are unique.\nNote that 1 column\nis used for a caret to mark the boundary commit.",
				"isString": false
			}
		]
	},
	{
		"name": "grep",
		"description": "Print lines matching a pattern",
		"flags": [
			{
				"name": "cached",
				"aliases": [],
				"description": "Instead of searching tracked files in the working tree, search\nblobs registered in the index file.",
				"isString": false
			},
			{
				"name": "no-index",
				"aliases": [],
				"description": "Search files in the current directory that is not managed by Git.",
				"isString": false
			},
			{
				"name": "untracked",
				"aliases": [],
				"description": "In addition to searching in the tracked files in the working\ntree, search also in untracked files.",
				"isString": false
			},
			{
				"name": "no-exclude-standard",
				"aliases": [],
				"description": "Also search in ignored files by not honoring the .gitignore\nmechanism. Only useful with --untracked.",
				"isString": false
			},
			{
				"name": "exclude-standard",
				"aliases": [],
				"description": "Do not pay attention to ignored files specified via the .gitignore\nmechanism.  Only useful when searching files in the current directory\nwith --no-index.",
				"isString": false
			},
			{
				"name": "recurse-submodules",
				"aliases": [],
				"description": "Recursively search in each submodule that is active and\nchecked out in the repository.  When used in combination with the\n<tree> option the prefix of all submodule output will be the name of\nthe parent project’s <tree> object. This option has no effect\nif --no-index is given.",
				"isString": false
			},
			{
				"name": "text",
				"aliases": [
					"a"
				],
				"description": "Process binary files as if they were text.",
				"isString": false
			},
			{
				"name": "textconv",
				"aliases": [],
				"description": "Honor textconv filter settings.",
				"isString": false
			},
			{
				"name": "no-textconv",
				"aliases": [],
				"description": "Do not honor textconv filter settings.\nThis is the default.",
				"isString": false
			},
			{
				"name": "ignore-case",
				"aliases": [
					"i"
				],
				"description": "Ignore case differences between the patterns and the\nfiles.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Don’t match the pattern in binary files.",
				"isString": false
			},
			{
				"name": "max-depth",
				"aliases": [],
				"description": "For each <pathspec> given on command line, descend at most <depth>\nlevels of directories. A value of -1 means no limit.\nThis option is ignored if <pathspec> contains active wildcards.\nIn other words if \"a*\" matches a directory named \"a*\",\n\"*\" is matched literally so --max-depth is still effective.",
				"isString": false
			},
			{
				"name": "recursive",
				"aliases": [
					"r"
				],
				"description": "Same as --max-depth=-1; this is the default.",
				"isString": false
			},
			{
				"name": "no-recursive",
				"aliases": [],
				"description": "Same as --max-depth=0.",
				"isString": false
			},
			{
				"name": "word-regexp",
				"aliases": [
					"w"
				],
				"description": "Match the pattern only at word boundary (either begin at the\nbeginning of a line, or preceded by a non-word character; end at\nthe end of a line or followed by a non-word character).",
				"isString": false
			},
			{
				"name": "invert-match",
				"aliases": [
					"v"
				],
				"description": "Select non-matching lines.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [
					"H"
				],
				"description": "By default, the command shows the filename for each\nmatch.  -h option is used to suppress this output.\n-H is there for completeness and does not do anything\nexcept it overrides -h given earlier on the command\nline.",
				"isString": false
			},
			{
				"name": "full-name",
				"aliases": [],
				"description": "When run from a subdirectory, the command usually\noutputs paths relative to the current directory.  This\noption forces paths to be output relative to the project\ntop directory.",
				"isString": false
			},
			{
				"name": "extended-regexp",
				"aliases": [
					"E",
					"G",
					"basic-regexp"
				],
				"description": "Use POSIX extended/basic regexp for patterns.  Default\nis to use basic regexp.",
				"isString": false
			},
			{
				"name": "perl-regexp",
				"aliases": [
					"P"
				],
				"description": "Use Perl-compatible regular expressions for patterns.\n\nSupport for these types of regular expressions is an optional\ncompile-time dependency. If Git wasn’t compiled with support for them\nproviding this option will cause it to die.",
				"isString": false
			},
			{
				"name": "fixed-strings",
				"aliases": [
					"F"
				],
				"description": "Use fixed strings for patterns (don’t interpret pattern\nas a regex).",
				"isString": false
			},
			{
				"name": "line-number",
				"aliases": [
					"n"
				],
				"description": "Prefix the line number to matching lines.",
				"isString": false
			},
			{
				"name": "column",
				"aliases": [],
				"description": "Prefix the 1-indexed byte-offset of the first match from the start of the\nmatching line.",
				"isString": false
			},
			{
				"name": "files-without-match",
				"aliases": [
					"l",
					"files-with-matches",
					"name-only",
					"L"
				],
				"description": "Instead of showing every matched line, show only the\nnames of files that contain (or do not contain) matches.\nFor better compatibility with git diff, --name-only is a\nsynonym for --files-with-matches.",
				"isString": false
			},
			{
				"name": "open-files-in-pager",
				"aliases": [
					"O[<pager>]"
				],
				"description": "Open the matching files in the pager (not the output of grep).\nIf the pager happens to be \"less\" or \"vi\", and the user\nspecified only one pattern, the first file is positioned at\nthe first match automatically. The pager argument is\noptional; if specified, it must be stuck to the option\nwithout a space. If pager is unspecified, the default pager\nwill be used (see core.pager in git-config[1]).",
				"isString": false
			},
			{
				"name": "null",
				"aliases": [
					"z"
				],
				"description": "Use \\0 as the delimiter for pathnames in the output, and print\nthem verbatim. Without this option, pathnames with \"unusual\"\ncharacters are quoted as explained for the configuration\nvariable core.quotePath (see git-config[1]).",
				"isString": false
			},
			{
				"name": "only-matching",
				"aliases": [
					"o"
				],
				"description": "Print only the matched (non-empty) parts of a matching line, with each such\npart on a separate output line.",
				"isString": false
			},
			{
				"name": "count",
				"aliases": [
					"c"
				],
				"description": "Instead of showing every matched line, show the number of\nlines that match.",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Show colored matches.\nThe value must be always (the default), never, or auto.",
				"isString": false
			},
			{
				"name": "no-color",
				"aliases": [],
				"description": "Turn off match highlighting, even when the configuration file\ngives the default to color output.\nSame as --color=never.",
				"isString": false
			},
			{
				"name": "break",
				"aliases": [],
				"description": "Print an empty line between matches from different files.",
				"isString": false
			},
			{
				"name": "heading",
				"aliases": [],
				"description": "Show the filename above the matches in that file instead of\nat the start of each shown line.",
				"isString": false
			},
			{
				"name": "show-function",
				"aliases": [
					"p"
				],
				"description": "Show the preceding line that contains the function name of\nthe match, unless the matching line is a function name itself.\nThe name is determined in the same way as git diff works out\npatch hunk headers (see Defining a custom hunk-header in\ngitattributes[5]).",
				"isString": false
			},
			{
				"name": "context",
				"aliases": [
					"<num>",
					"C"
				],
				"description": "Show <num> leading and trailing lines, and place a line\ncontaining -- between contiguous groups of matches.",
				"isString": false
			},
			{
				"name": "after-context",
				"aliases": [
					"A"
				],
				"description": "Show <num> trailing lines, and place a line containing\n-- between contiguous groups of matches.",
				"isString": false
			},
			{
				"name": "before-context",
				"aliases": [
					"B"
				],
				"description": "Show <num> leading lines, and place a line containing\n-- between contiguous groups of matches.",
				"isString": false
			},
			{
				"name": "function-context",
				"aliases": [
					"W"
				],
				"description": "Show the surrounding text from the previous line containing a\nfunction name up to the one before the next function name,\neffectively showing the whole function in which the match was\nfound. The function names are determined in the same way as\ngit diff works out patch hunk headers (see Defining a\ncustom hunk-header in gitattributes[5]).",
				"isString": false
			},
			{
				"name": "threads",
				"aliases": [],
				"description": "Number of grep worker threads to use.\nSee grep.threads in CONFIGURATION for more information.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Read patterns from <file>, one per line.\n\nPassing the pattern via <file> allows for providing a search pattern\ncontaining a \\0.\n\n\nNot all pattern types support patterns containing \\0. Git will error\nout if a given pattern type can’t support such a pattern. The\n--perl-regexp pattern type when compiled against the PCRE v2 backend\nhas the widest support for these types of patterns.\n\n\nIn versions of Git before 2.23.0 patterns containing \\0 would be\nsilently considered fixed. This was never documented, there were also\nodd and undocumented interactions between e.g. non-ASCII patterns\ncontaining \\0 and --ignore-case.\n\n\nIn future versions we may learn to support patterns containing \\0 for\nmore search backends, until then we’ll die when the pattern type in\nquestion doesn’t support them.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The next parameter is the pattern. This option has to be\nused for patterns starting with - and should be used in\nscripts passing user input to grep.  Multiple patterns are\ncombined by or.",
				"isString": false
			},
			{
				"name": "…​ )",
				"aliases": [
					"and",
					"or",
					"not"
				],
				"description": "Specify how multiple patterns are combined using Boolean\nexpressions.  --or is the default operator.  --and has\nhigher precedence than --or.  -e has to be used for all\npatterns.",
				"isString": false
			},
			{
				"name": "all-match",
				"aliases": [],
				"description": "When giving multiple pattern expressions combined with --or,\nthis flag is specified to limit the match to files that\nhave lines to match all of them.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Do not output matched lines; instead, exit with status 0 when\nthere is a match and with non-zero status when there isn’t.",
				"isString": false
			},
			{
				"name": "<tree>…​",
				"aliases": [],
				"description": "Instead of searching tracked files in the working tree, search\nblobs in the given trees.",
				"isString": true
			},
			{
				"name": "",
				"aliases": [],
				"description": "Signals the end of options; the rest of the parameters\nare <pathspec> limiters.",
				"isString": false
			},
			{
				"name": "<pathspec>…​",
				"aliases": [],
				"description": "If given, limit the search to paths matching at least one pattern.\nBoth leading paths match and glob(7) patterns are supported.\n\nFor more details about the <pathspec> syntax, see the pathspec entry\nin gitglossary[7].",
				"isString": true
			}
		]
	},
	{
		"name": "am",
		"description": "Apply a series of patches from a mailbox",
		"flags": [
			{
				"name": "(<mbox>|<Maildir>)…​",
				"aliases": [],
				"description": "The list of mailbox files to read patches from. If you do not\nsupply this argument, the command reads from the standard input.\nIf you supply directories, they will be treated as Maildirs.",
				"isString": true
			},
			{
				"name": "signoff",
				"aliases": [
					"s"
				],
				"description": "Add a Signed-off-by trailer to the commit message, using\nthe committer identity of yourself.\nSee the signoff option in git-commit[1] for more information.",
				"isString": false
			},
			{
				"name": "keep",
				"aliases": [
					"k"
				],
				"description": "Pass -k flag to git mailinfo (see git-mailinfo[1]).",
				"isString": false
			},
			{
				"name": "keep-non-patch",
				"aliases": [],
				"description": "Pass -b flag to git mailinfo (see git-mailinfo[1]).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "With --keep-cr, call git mailsplit (see git-mailsplit[1])\nwith the same option, to prevent it from stripping CR at the end of\nlines. am.keepcr configuration variable can be used to specify the\ndefault behaviour.  --no-keep-cr is useful to override am.keepcr.",
				"isString": false
			},
			{
				"name": "scissors",
				"aliases": [
					"c"
				],
				"description": "Remove everything in body before a scissors line (see\ngit-mailinfo[1]). Can be activated by default using\nthe mailinfo.scissors configuration variable.",
				"isString": false
			},
			{
				"name": "no-scissors",
				"aliases": [],
				"description": "Ignore scissors lines (see git-mailinfo[1]).",
				"isString": false
			},
			{
				"name": "message-id",
				"aliases": [
					"m"
				],
				"description": "Pass the -m flag to git mailinfo (see git-mailinfo[1]),\nso that the Message-ID header is added to the commit message.\nThe am.messageid configuration variable can be used to specify\nthe default behaviour.",
				"isString": false
			},
			{
				"name": "no-message-id",
				"aliases": [],
				"description": "Do not add the Message-ID header to the commit message.\nno-message-id is useful to override am.messageid.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Be quiet. Only print error messages.",
				"isString": false
			},
			{
				"name": "utf8",
				"aliases": [
					"u"
				],
				"description": "Pass -u flag to git mailinfo (see git-mailinfo[1]).\nThe proposed commit log message taken from the e-mail\nis re-coded into UTF-8 encoding (configuration variable\ni18n.commitEncoding can be used to specify project’s\npreferred encoding if it is not UTF-8).\n\nThis was optional in prior versions of git, but now it is the\ndefault.   You can use --no-utf8 to override this.",
				"isString": false
			},
			{
				"name": "no-utf8",
				"aliases": [],
				"description": "Pass -n flag to git mailinfo (see\ngit-mailinfo[1]).",
				"isString": false
			},
			{
				"name": "no-3way",
				"aliases": [
					"3",
					"3way"
				],
				"description": "When the patch does not apply cleanly, fall back on\n3-way merge if the patch records the identity of blobs\nit is supposed to apply to and we have those blobs\navailable locally. --no-3way can be used to override\nam.threeWay configuration variable. For more information,\nsee am.threeWay in git-config[1].",
				"isString": false
			},
			{
				"name": "no-rerere-autoupdate",
				"aliases": [
					"rerere-autoupdate"
				],
				"description": "Allow the rerere mechanism to update the index with the\nresult of auto-conflict resolution if possible.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"ignore-whitespace",
					"whitespace=<option>",
					"C<n>",
					"p<n>",
					"directory=<dir>",
					"exclude=<path>",
					"include=<path>",
					"reject"
				],
				"description": "These flags are passed to the git apply (see git-apply[1])\nprogram that applies\nthe patch.",
				"isString": false
			},
			{
				"name": "patch-format",
				"aliases": [],
				"description": "By default the command will try to detect the patch format\nautomatically. This option allows the user to bypass the automatic\ndetection and specify the patch format that the patch(es) should be\ninterpreted as. Valid formats are mbox, mboxrd,\nstgit, stgit-series and hg.",
				"isString": false
			},
			{
				"name": "interactive",
				"aliases": [
					"i"
				],
				"description": "Run interactively.",
				"isString": false
			},
			{
				"name": "committer-date-is-author-date",
				"aliases": [],
				"description": "By default the command records the date from the e-mail\nmessage as the commit author date, and uses the time of\ncommit creation as the committer date. This allows the\nuser to lie about the committer date by using the same\nvalue as the author date.",
				"isString": false
			},
			{
				"name": "ignore-date",
				"aliases": [],
				"description": "By default the command records the date from the e-mail\nmessage as the commit author date, and uses the time of\ncommit creation as the committer date. This allows the\nuser to lie about the author date by using the same\nvalue as the committer date.",
				"isString": false
			},
			{
				"name": "skip",
				"aliases": [],
				"description": "Skip the current patch.  This is only meaningful when\nrestarting an aborted patch.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign commits. The keyid argument is optional and\ndefaults to the committer identity; if specified, it must be\nstuck to the option without a space. --no-gpg-sign is useful to\ncountermand both commit.gpgSign configuration variable, and\nearlier --gpg-sign.",
				"isString": false
			},
			{
				"name": "continue",
				"aliases": [
					"r",
					"resolved"
				],
				"description": "After a patch failure (e.g. attempting to apply\nconflicting patch), the user has applied it by hand and\nthe index file stores the result of the application.\nMake a commit using the authorship and commit log\nextracted from the e-mail message and the current index\nfile, and continue.",
				"isString": false
			},
			{
				"name": "resolvemsg",
				"aliases": [],
				"description": "When a patch failure occurs, <msg> will be printed\nto the screen before exiting.  This overrides the\nstandard message informing you to use --continue\nor --skip to handle the failure.  This is solely\nfor internal use between git rebase and git am.",
				"isString": false
			},
			{
				"name": "abort",
				"aliases": [],
				"description": "Restore the original branch and abort the patching operation.",
				"isString": false
			},
			{
				"name": "quit",
				"aliases": [],
				"description": "Abort the patching operation but keep HEAD and the index\nuntouched.",
				"isString": false
			},
			{
				"name": "show-current-patch",
				"aliases": [],
				"description": "Show the message at which git am has stopped due to\nconflicts.  If raw is specified, show the raw contents of\nthe e-mail message; if diff, show the diff portion only.\nDefaults to raw.",
				"isString": false
			}
		]
	},
	{
		"name": "apply",
		"description": "Apply a patch to files and/or to the index",
		"flags": [
			{
				"name": "<patch>…​",
				"aliases": [],
				"description": "The files to read the patch from.  - can be used to read\nfrom the standard input.",
				"isString": true
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Instead of applying the patch, output diffstat for the\ninput.  Turns off \"apply\".",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows the number of added and\ndeleted lines in decimal notation and the pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.  Turns off \"apply\".",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Instead of applying the patch, output a condensed\nsummary of information obtained from git diff extended\nheaders, such as creations, renames and mode changes.\nTurns off \"apply\".",
				"isString": false
			},
			{
				"name": "check",
				"aliases": [],
				"description": "Instead of applying the patch, see if the patch is\napplicable to the current working tree and/or the index\nfile and detects errors.  Turns off \"apply\".",
				"isString": false
			},
			{
				"name": "index",
				"aliases": [],
				"description": "Apply the patch to both the index and the working tree (or\nmerely check that it would apply cleanly to both if --check is\nin effect). Note that --index expects index entries and\nworking tree copies for relevant paths to be identical (their\ncontents and metadata such as file mode must match), and will\nraise an error if they are not, even if the patch would apply\ncleanly to both the index and the working tree in isolation.",
				"isString": false
			},
			{
				"name": "cached",
				"aliases": [],
				"description": "Apply the patch to just the index, without touching the working\ntree. If --check is in effect, merely check that it would\napply cleanly to the index entry.",
				"isString": false
			},
			{
				"name": "intent-to-add",
				"aliases": [],
				"description": "When applying the patch only to the working tree, mark new\nfiles to be added to the index later (see --intent-to-add\noption in git-add[1]). This option is ignored unless\nrunning in a Git repository and --index is not specified.\nNote that --index could be implied by other options such\nas --cached or --3way.",
				"isString": false
			},
			{
				"name": "3way",
				"aliases": [
					"3"
				],
				"description": "When the patch does not apply cleanly, fall back on 3-way merge if\nthe patch records the identity of blobs it is supposed to apply to,\nand we have those blobs available locally, possibly leaving the\nconflict markers in the files in the working tree for the user to\nresolve.  This option implies the --index option, and is incompatible\nwith the --reject and the --cached options.",
				"isString": false
			},
			{
				"name": "build-fake-ancestor",
				"aliases": [],
				"description": "Newer git diff output has embedded index information\nfor each blob to help identify the original version that\nthe patch applies to.  When this flag is given, and if\nthe original versions of the blobs are available locally,\nbuilds a temporary index containing those blobs.\n\nWhen a pure mode change is encountered (which has no index information),\nthe information is read from the current index instead.",
				"isString": false
			},
			{
				"name": "reverse",
				"aliases": [
					"R"
				],
				"description": "Apply the patch in reverse.",
				"isString": false
			},
			{
				"name": "reject",
				"aliases": [],
				"description": "For atomicity, git apply by default fails the whole patch and\ndoes not touch the working tree when some of the hunks\ndo not apply.  This option makes it apply\nthe parts of the patch that are applicable, and leave the\nrejected hunks in corresponding *.rej files.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When --numstat has been given, do not munge pathnames,\nbut use a NUL-terminated machine-readable format.\n\nWithout this option, pathnames with \"unusual\" characters are quoted as\nexplained for the configuration variable core.quotePath (see\ngit-config[1]).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Remove <n> leading path components (separated by slashes) from\ntraditional diff paths. E.g., with -p2, a patch against\na/dir/file will be applied directly to file. The default is\n1.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Ensure at least <n> lines of surrounding context match before\nand after each change.  When fewer lines of surrounding\ncontext exist they all must match.  By default no context is\never ignored.",
				"isString": false
			},
			{
				"name": "unidiff-zero",
				"aliases": [],
				"description": "By default, git apply expects that the patch being\napplied is a unified diff with at least one line of context.\nThis provides good safety measures, but breaks down when\napplying a diff generated with --unified=0. To bypass these\nchecks use --unidiff-zero.\n\nNote, for the reasons stated above usage of context-free patches is\ndiscouraged.",
				"isString": false
			},
			{
				"name": "apply",
				"aliases": [],
				"description": "If you use any of the options marked \"Turns off\napply\" above, git apply reads and outputs the\nrequested information without actually applying the\npatch.  Give this flag after those flags to also apply\nthe patch.",
				"isString": false
			},
			{
				"name": "no-add",
				"aliases": [],
				"description": "When applying a patch, ignore additions made by the\npatch.  This can be used to extract the common part between\ntwo files by first running diff on them and applying\nthe result with this option, which would apply the\ndeletion part but not the addition part.",
				"isString": false
			},
			{
				"name": "allow-binary-replacement",
				"aliases": [
					"binary"
				],
				"description": "Historically we did not allow binary patch applied\nwithout an explicit permission from the user, and this\nflag was the way to do so.  Currently we always allow binary\npatch application, so this is a no-op.",
				"isString": false
			},
			{
				"name": "exclude",
				"aliases": [],
				"description": "Don’t apply changes to files matching the given path pattern. This can\nbe useful when importing patchsets, where you want to exclude certain\nfiles or directories.",
				"isString": false
			},
			{
				"name": "include",
				"aliases": [],
				"description": "Apply changes to files matching the given path pattern. This can\nbe useful when importing patchsets, where you want to include certain\nfiles or directories.\n\nWhen --exclude and --include patterns are used, they are examined in the\norder they appear on the command line, and the first match determines if a\npatch to each path is used.  A patch to a path that does not match any\ninclude/exclude pattern is used by default if there is no include pattern\non the command line, and ignored if there is any include pattern.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"ignore-whitespace"
				],
				"description": "When applying a patch, ignore changes in whitespace in context\nlines if necessary.\nContext lines will preserve their whitespace, and they will not\nundergo whitespace fixing regardless of the value of the\n--whitespace option. New lines will still be fixed, though.",
				"isString": false
			},
			{
				"name": "whitespace",
				"aliases": [],
				"description": "When applying a patch, detect a new or modified line that has\nwhitespace errors.  What are considered whitespace errors is\ncontrolled by core.whitespace configuration.  By default,\ntrailing whitespaces (including lines that solely consist of\nwhitespaces) and a space character that is immediately followed\nby a tab character inside the initial indent of the line are\nconsidered whitespace errors.\n\nBy default, the command outputs warning messages but applies the patch.\nWhen git-apply is used for statistics and not applying a\npatch, it defaults to nowarn.\n\n\nYou can use different <action> values to control this\nbehavior:\n\n\n\n\nnowarn turns off the trailing whitespace warning.\n\n\nwarn outputs warnings for a few such errors, but applies the\npatch as-is (default).\n\n\nfix outputs warnings for a few such errors, and applies the\npatch after fixing them (strip is a synonym --- the tool\nused to consider only trailing whitespace characters as errors, and the\nfix involved stripping them, but modern Gits do more).\n\n\nerror outputs warnings for a few such errors, and refuses\nto apply the patch.\n\n\nerror-all is similar to error but shows all errors.",
				"isString": false
			},
			{
				"name": "inaccurate-eof",
				"aliases": [],
				"description": "Under certain circumstances, some versions of diff do not correctly\ndetect a missing new-line at the end of the file. As a result, patches\ncreated by such diff programs do not record incomplete lines\ncorrectly. This option adds support for applying such patches by\nworking around this bug.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Report progress to stderr. By default, only a message about the\ncurrent patch being applied will be printed. This option will cause\nadditional information to be reported.",
				"isString": false
			},
			{
				"name": "recount",
				"aliases": [],
				"description": "Do not trust the line counts in the hunk headers, but infer them\nby inspecting the patch (e.g. after editing the patch without\nadjusting the hunk headers appropriately).",
				"isString": false
			},
			{
				"name": "directory",
				"aliases": [],
				"description": "Prepend <root> to all filenames.  If a \"-p\" argument was also passed,\nit is applied before prepending the new root.\n\nFor example, a patch that talks about updating a/git-gui.sh to b/git-gui.sh\ncan be applied to the file in the working tree modules/git-gui/git-gui.sh by\nrunning git apply --directory=modules/git-gui.",
				"isString": false
			},
			{
				"name": "unsafe-paths",
				"aliases": [],
				"description": "By default, a patch that affects outside the working area\n(either a Git controlled working tree, or the current working\ndirectory when \"git apply\" is used as a replacement of GNU\npatch) is rejected as a mistake (or a mischief).\n\nWhen git apply is used as a \"better GNU patch\", the user can pass\nthe --unsafe-paths option to override this safety check.  This option\nhas no effect when --index or --cached is in use.",
				"isString": false
			}
		]
	},
	{
		"name": "format-patch",
		"description": "Prepare patches for e-mail submission",
		"flags": [
			{
				"name": "no-stat",
				"aliases": [
					"p"
				],
				"description": "Generate plain patches without any diffstats.",
				"isString": false
			},
			{
				"name": "unified",
				"aliases": [
					"U<n>"
				],
				"description": "Generate diffs with <n> lines of context instead of\nthe usual three.",
				"isString": false
			},
			{
				"name": "output",
				"aliases": [],
				"description": "Output to a specific file instead of stdout.",
				"isString": false
			},
			{
				"name": "output-indicator-context",
				"aliases": [
					"output-indicator-new=<char>",
					"output-indicator-old=<char>"
				],
				"description": "Specify the character used to indicate new, old or context\nlines in the generated patch. Normally they are +, - and\n' ' respectively.",
				"isString": false
			},
			{
				"name": "indent-heuristic",
				"aliases": [],
				"description": "Enable the heuristic that shifts diff hunk boundaries to make patches\neasier to read. This is the default.",
				"isString": false
			},
			{
				"name": "no-indent-heuristic",
				"aliases": [],
				"description": "Disable the indent heuristic.",
				"isString": false
			},
			{
				"name": "minimal",
				"aliases": [],
				"description": "Spend extra time to make sure the smallest possible\ndiff is produced.",
				"isString": false
			},
			{
				"name": "patience",
				"aliases": [],
				"description": "Generate a diff using the \"patience diff\" algorithm.",
				"isString": false
			},
			{
				"name": "histogram",
				"aliases": [],
				"description": "Generate a diff using the \"histogram diff\" algorithm.",
				"isString": false
			},
			{
				"name": "anchored",
				"aliases": [],
				"description": "Generate a diff using the \"anchored diff\" algorithm.\n\nThis option may be specified more than once.\n\n\nIf a line exists in both the source and destination, exists only once,\nand starts with this text, this algorithm attempts to prevent it from\nappearing as a deletion or addition in the output. It uses the \"patience\ndiff\" algorithm internally.",
				"isString": false
			},
			{
				"name": "diff-algorithm",
				"aliases": [],
				"description": "Choose a diff algorithm. The variants are as follows:\n\n\n\n\n default, myers \n\nThe basic greedy diff algorithm. Currently, this is the default.\n\n minimal \n\nSpend extra time to make sure the smallest possible diff is\nproduced.\n\n patience \n\nUse \"patience diff\" algorithm when generating patches.\n\n histogram \n\nThis algorithm extends the patience algorithm to \"support\nlow-occurrence common elements\".\n\n\n\n\n\n\nFor instance, if you configured the diff.algorithm variable to a\nnon-default value and want to use the default one, then you\nhave to use --diff-algorithm=default option.",
				"isString": false
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Generate a diffstat. By default, as much space as necessary\nwill be used for the filename part, and the rest for the graph\npart. Maximum width defaults to terminal width, or 80 columns\nif not connected to a terminal, and can be overridden by\n<width>. The width of the filename part can be limited by\ngiving another width <name-width> after a comma. The width\nof the graph part can be limited by using\n--stat-graph-width=<width> (affects all commands generating\na stat graph) or by setting diff.statGraphWidth=<width>\n(does not affect git format-patch).\nBy giving a third parameter <count>, you can limit the\noutput to the first <count> lines, followed by ... if\nthere are more.\n\nThese parameters can also be set individually with --stat-width=<width>,\n--stat-name-width=<name-width> and --stat-count=<count>.",
				"isString": false
			},
			{
				"name": "compact-summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information such\nas file creations or deletions (\"new\" or \"gone\", optionally \"+l\"\nif it’s a symlink) and mode changes (\"+x\" or \"-x\" for adding\nor removing executable bit respectively) in diffstat. The\ninformation is put between the filename part and the graph\npart. Implies --stat.",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows number of added and\ndeleted lines in decimal notation and pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.",
				"isString": false
			},
			{
				"name": "shortstat",
				"aliases": [],
				"description": "Output only the last line of the --stat format containing total\nnumber of modified files, as well as number of added and deleted\nlines.",
				"isString": false
			},
			{
				"name": "dirstat",
				"aliases": [
					"X[<param1,param2,…​>]"
				],
				"description": "Output the distribution of relative amount of changes for each\nsub-directory. The behavior of --dirstat can be customized by\npassing it a comma separated list of parameters.\nThe defaults are controlled by the diff.dirstat configuration\nvariable (see git-config[1]).\nThe following parameters are available:\n\n\n\n\n changes \n\nCompute the dirstat numbers by counting the lines that have been\nremoved from the source, or added to the destination. This ignores\nthe amount of pure code movements within a file.  In other words,\nrearranging lines in a file is not counted as much as other changes.\nThis is the default behavior when no parameter is given.\n\n lines \n\nCompute the dirstat numbers by doing the regular line-based diff\nanalysis, and summing the removed/added line counts. (For binary\nfiles, count 64-byte chunks instead, since binary files have no\nnatural concept of lines). This is a more expensive --dirstat\nbehavior than the changes behavior, but it does count rearranged\nlines within a file as much as other changes. The resulting output\nis consistent with what you get from the other --*stat options.\n\n files \n\nCompute the dirstat numbers by counting the number of files changed.\nEach changed file counts equally in the dirstat analysis. This is\nthe computationally cheapest --dirstat behavior, since it does\nnot have to look at the file contents at all.\n\n cumulative \n\nCount changes in a child directory for the parent directory as well.\nNote that when using cumulative, the sum of the percentages\nreported may exceed 100%. The default (non-cumulative) behavior can\nbe specified with the noncumulative parameter.\n\n <limit> \n\nAn integer parameter specifies a cut-off percent (3% by default).\nDirectories contributing less than this percentage of the changes\nare not shown in the output.\n\n\n\n\n\n\nExample: The following will count changed files, while ignoring\ndirectories with less than 10% of the total amount of changed files,\nand accumulating child directory counts in the parent directories:\n--dirstat=files,10,cumulative.",
				"isString": false
			},
			{
				"name": "cumulative",
				"aliases": [],
				"description": "Synonym for --dirstat=cumulative",
				"isString": false
			},
			{
				"name": "dirstat-by-file",
				"aliases": [],
				"description": "Synonym for --dirstat=files,param1,param2…​",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information\nsuch as creations, renames and mode changes.",
				"isString": false
			},
			{
				"name": "no-renames",
				"aliases": [],
				"description": "Turn off rename detection, even when the configuration\nfile gives the default to do so.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Whether to use empty blobs as rename source.",
				"isString": false
			},
			{
				"name": "full-index",
				"aliases": [],
				"description": "Instead of the first handful of characters, show the full\npre- and post-image blob object names on the \"index\"\nline when generating patch format output.",
				"isString": false
			},
			{
				"name": "binary",
				"aliases": [],
				"description": "In addition to --full-index, output a binary diff that\ncan be applied with git-apply.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nname in diff-raw format output and diff-tree header\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nIn diff-patch output format, --full-index takes higher\nprecedence, i.e. if --full-index is specified, full blob\nnames will be shown regardless of --abbrev.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "break-rewrites",
				"aliases": [
					"B[<n>][/<m>]"
				],
				"description": "Break complete rewrite changes into pairs of delete and\ncreate. This serves two purposes:\n\nIt affects the way a change that amounts to a total rewrite of a file\nnot as a series of deletion and insertion mixed together with a very\nfew lines that happen to match textually as the context, but as a\nsingle deletion of everything old followed by a single insertion of\neverything new, and the number m controls this aspect of the -B\noption (defaults to 60%). -B/70% specifies that less than 30% of the\noriginal should remain in the result for Git to consider it a total\nrewrite (i.e. otherwise the resulting patch will be a series of\ndeletion and insertion mixed together with context lines).\n\n\nWhen used with -M, a totally-rewritten file is also considered as the\nsource of a rename (usually -M only considers a file that disappeared\nas the source of a rename), and the number n controls this aspect of\nthe -B option (defaults to 50%). -B20% specifies that a change with\naddition and deletion compared to 20% or more of the file’s size are\neligible for being picked up as a possible source of a rename to\nanother file.",
				"isString": false
			},
			{
				"name": "find-renames",
				"aliases": [
					"M[<n>]"
				],
				"description": "Detect renames.\nIf n is specified, it is a threshold on the similarity\nindex (i.e. amount of addition/deletions compared to the\nfile’s size). For example, -M90% means Git should consider a\ndelete/add pair to be a rename if more than 90% of the file\nhasn’t changed.  Without a % sign, the number is to be read as\na fraction, with a decimal point before it.  I.e., -M5 becomes\n0.5, and is thus the same as -M50%.  Similarly, -M05 is\nthe same as -M5%.  To limit detection to exact renames, use\n-M100%.  The default similarity index is 50%.",
				"isString": false
			},
			{
				"name": "find-copies",
				"aliases": [
					"C[<n>]"
				],
				"description": "Detect copies as well as renames.  See also --find-copies-harder.\nIf n is specified, it has the same meaning as for -M<n>.",
				"isString": false
			},
			{
				"name": "find-copies-harder",
				"aliases": [],
				"description": "For performance reasons, by default, -C option finds copies only\nif the original file of the copy was modified in the same\nchangeset.  This flag makes the command\ninspect unmodified files as candidates for the source of\ncopy.  This is a very expensive operation for large\nprojects, so use it with caution.  Giving more than one\n-C option has the same effect.",
				"isString": false
			},
			{
				"name": "irreversible-delete",
				"aliases": [
					"D"
				],
				"description": "Omit the preimage for deletes, i.e. print only the header but not\nthe diff between the preimage and /dev/null. The resulting patch\nis not meant to be applied with patch or git apply; this is\nsolely for people who want to just concentrate on reviewing the\ntext after the change. In addition, the output obviously lacks\nenough information to apply such a patch in reverse, even manually,\nhence the name of the option.\n\nWhen used together with -B, omit also the preimage in the deletion part\nof a delete/create pair.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The -M and -C options require O(n^2) processing time where n\nis the number of potential rename/copy targets.  This\noption prevents rename/copy detection from running if\nthe number of rename/copy targets exceeds the specified\nnumber.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Control the order in which files appear in the output.\nThis overrides the diff.orderFile configuration variable\n(see git-config[1]).  To cancel diff.orderFile,\nuse -O/dev/null.\n\nThe output order is determined by the order of glob patterns in\n<orderfile>.\nAll files with pathnames that match the first pattern are output\nfirst, all files with pathnames that match the second pattern (but not\nthe first) are output next, and so on.\nAll files with pathnames that do not match any pattern are output\nlast, as if there was an implicit match-all pattern at the end of the\nfile.\nIf multiple pathnames have the same rank (they match the same pattern\nbut no earlier patterns), their output order relative to each other is\nthe normal order.\n\n\n<orderfile> is parsed as follows:\n\n\n\n\n\n\nBlank lines are ignored, so they can be used as separators for\nreadability.\n\n\nLines starting with a hash (\"#\") are ignored, so they can be used\nfor comments.  Add a backslash (\"\\\") to the beginning of the\npattern if it starts with a hash.\n\n\nEach other line contains a single pattern.\n\n\n\n\n\n\nPatterns have the same syntax and semantics as patterns used for\nfnmatch(3) without the FNM_PATHNAME flag, except a pathname also\nmatches a pattern if removing any number of the final pathname\ncomponents matches the pattern.  For example, the pattern \"foo*bar\"\nmatches \"fooasdfbar\" and \"foo/bar/baz/asdf\" but not \"foobarx\".",
				"isString": false
			},
			{
				"name": "rotate-to",
				"aliases": [
					"skip-to=<file>"
				],
				"description": "Discard the files before the named <file> from the output\n(i.e. skip to), or move them to the end of the output\n(i.e. rotate to).  These were invented primarily for use\nof the git difftool command, and may not be very useful\notherwise.",
				"isString": false
			},
			{
				"name": "relative",
				"aliases": [
					"no-relative"
				],
				"description": "When run from a subdirectory of the project, it can be\ntold to exclude changes outside the directory and show\npathnames relative to it with this option.  When you are\nnot in a subdirectory (e.g. in a bare repository), you\ncan name which subdirectory to make the output relative\nto by giving a <path> as an argument.\n--no-relative can be used to countermand both diff.relative config\noption and previous --relative.",
				"isString": false
			},
			{
				"name": "text",
				"aliases": [
					"a"
				],
				"description": "Treat all files as text.",
				"isString": false
			},
			{
				"name": "ignore-cr-at-eol",
				"aliases": [],
				"description": "Ignore carriage-return at the end of line when doing a comparison.",
				"isString": false
			},
			{
				"name": "ignore-space-at-eol",
				"aliases": [],
				"description": "Ignore changes in whitespace at EOL.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"b"
				],
				"description": "Ignore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.",
				"isString": false
			},
			{
				"name": "ignore-all-space",
				"aliases": [
					"w"
				],
				"description": "Ignore whitespace when comparing lines.  This ignores\ndifferences even if one line has whitespace where the other\nline has none.",
				"isString": false
			},
			{
				"name": "ignore-blank-lines",
				"aliases": [],
				"description": "Ignore changes whose lines are all blank.",
				"isString": false
			},
			{
				"name": "ignore-matching-lines",
				"aliases": [
					"I<regex>"
				],
				"description": "Ignore changes whose all lines match <regex>.  This option may\nbe specified more than once.",
				"isString": false
			},
			{
				"name": "inter-hunk-context",
				"aliases": [],
				"description": "Show the context between diff hunks, up to the specified number\nof lines, thereby fusing hunks that are close to each other.\nDefaults to diff.interHunkContext or 0 if the config option\nis unset.",
				"isString": false
			},
			{
				"name": "function-context",
				"aliases": [
					"W"
				],
				"description": "Show whole function as context lines for each change.\nThe function names are determined in the same way as\ngit diff works out patch hunk headers (see Defining a\ncustom hunk-header in gitattributes[5]).",
				"isString": false
			},
			{
				"name": "ext-diff",
				"aliases": [],
				"description": "Allow an external diff helper to be executed. If you set an\nexternal diff driver with gitattributes[5], you need\nto use this option with git-log[1] and friends.",
				"isString": false
			},
			{
				"name": "no-ext-diff",
				"aliases": [],
				"description": "Disallow external diff drivers.",
				"isString": false
			},
			{
				"name": "no-textconv",
				"aliases": [
					"textconv"
				],
				"description": "Allow (or disallow) external text conversion filters to be run\nwhen comparing binary files. See gitattributes[5] for\ndetails. Because textconv filters are typically a one-way\nconversion, the resulting diff is suitable for human\nconsumption, but cannot be applied. For this reason, textconv\nfilters are enabled by default only for git-diff[1] and\ngit-log[1], but not for git-format-patch[1] or\ndiff plumbing commands.",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Ignore changes to submodules in the diff generation. <when> can be\neither \"none\", \"untracked\", \"dirty\" or \"all\", which is the default.\nUsing \"none\" will consider the submodule modified when it either contains\nuntracked or modified files or its HEAD differs from the commit recorded\nin the superproject and can be used to override any settings of the\nignore option in git-config[1] or gitmodules[5]. When\n\"untracked\" is used submodules are not considered dirty when they only\ncontain untracked content (but they are still scanned for modified\ncontent). Using \"dirty\" ignores all changes to the work tree of submodules,\nonly changes to the commits stored in the superproject are shown (this was\nthe behavior until 1.7.0). Using \"all\" hides all changes to submodules.",
				"isString": false
			},
			{
				"name": "src-prefix",
				"aliases": [],
				"description": "Show the given source prefix instead of \"a/\".",
				"isString": false
			},
			{
				"name": "dst-prefix",
				"aliases": [],
				"description": "Show the given destination prefix instead of \"b/\".",
				"isString": false
			},
			{
				"name": "no-prefix",
				"aliases": [],
				"description": "Do not show any source or destination prefix.",
				"isString": false
			},
			{
				"name": "line-prefix",
				"aliases": [],
				"description": "Prepend an additional prefix to every line of output.",
				"isString": false
			},
			{
				"name": "ita-invisible-in-index",
				"aliases": [],
				"description": "By default entries added by \"git add -N\" appear as an existing\nempty file in \"git diff\" and a new file in \"git diff --cached\".\nThis option makes the entry appear as a new file in \"git diff\"\nand non-existent in \"git diff --cached\". This option could be\nreverted with --ita-visible-in-index. Both options are\nexperimental and could be removed in future.",
				"isString": false
			}
		]
	},
	{
		"name": "send-email",
		"description": "Send a collection of patches as emails",
		"flags": [
			{
				"name": "annotate",
				"aliases": [],
				"description": "Review and edit each patch you’re about to send. Default is the value\nof sendemail.annotate. See the CONFIGURATION section for\nsendemail.multiEdit.",
				"isString": false
			},
			{
				"name": "bcc",
				"aliases": [],
				"description": "Specify a \"Bcc:\" value for each email. Default is the value of\nsendemail.bcc.\n\nThis option may be specified multiple times.",
				"isString": false
			},
			{
				"name": "cc",
				"aliases": [],
				"description": "Specify a starting \"Cc:\" value for each email.\nDefault is the value of sendemail.cc.\n\nThis option may be specified multiple times.",
				"isString": false
			},
			{
				"name": "compose",
				"aliases": [],
				"description": "Invoke a text editor (see GIT_EDITOR in git-var[1])\nto edit an introductory message for the patch series.\n\nWhen --compose is used, git send-email will use the From, Subject, and\nIn-Reply-To headers specified in the message. If the body of the message\n(what you type after the headers and a blank line) only contains blank\n(or Git: prefixed) lines, the summary won’t be sent, but From, Subject,\nand In-Reply-To headers will be used unless they are removed.\n\n\nMissing From or In-Reply-To headers will be prompted for.\n\n\nSee the CONFIGURATION section for sendemail.multiEdit.",
				"isString": false
			},
			{
				"name": "from",
				"aliases": [],
				"description": "Specify the sender of the emails.  If not specified on the command line,\nthe value of the sendemail.from configuration option is used.  If\nneither the command-line option nor sendemail.from are set, then the\nuser will be prompted for the value.  The default for the prompt will be\nthe value of GIT_AUTHOR_IDENT, or GIT_COMMITTER_IDENT if that is not\nset, as returned by \"git var -l\".",
				"isString": false
			},
			{
				"name": "reply-to",
				"aliases": [],
				"description": "Specify the address where replies from recipients should go to.\nUse this if replies to messages should go to another address than what\nis specified with the --from parameter.",
				"isString": false
			},
			{
				"name": "in-reply-to",
				"aliases": [],
				"description": "Make the first mail (or all the mails with --no-thread) appear as a\nreply to the given Message-Id, which avoids breaking threads to\nprovide a new patch series.\nThe second and subsequent emails will be sent as replies according to\nthe --[no-]chain-reply-to setting.\n\nSo for example when --thread and --no-chain-reply-to are specified, the\nsecond and subsequent patches will be replies to the first one like in the\nillustration below where [PATCH v2 0/3] is in reply to [PATCH 0/2]:\n\n\n\n[PATCH 0/2] Here is what I did...\n  [PATCH 1/2] Clean up and tests\n  [PATCH 2/2] Implementation\n  [PATCH v2 0/3] Here is a reroll\n    [PATCH v2 1/3] Clean up\n    [PATCH v2 2/3] New tests\n    [PATCH v2 3/3] Implementation\n\n\n\nOnly necessary if --compose is also set.  If --compose\nis not set, this will be prompted for.",
				"isString": false
			},
			{
				"name": "subject",
				"aliases": [],
				"description": "Specify the initial subject of the email thread.\nOnly necessary if --compose is also set.  If --compose\nis not set, this will be prompted for.",
				"isString": false
			},
			{
				"name": "to",
				"aliases": [],
				"description": "Specify the primary recipient of the emails generated. Generally, this\nwill be the upstream maintainer of the project involved. Default is the\nvalue of the sendemail.to configuration value; if that is unspecified,\nand --to-cmd is not specified, this will be prompted for.\n\nThis option may be specified multiple times.",
				"isString": false
			},
			{
				"name": "8bit-encoding",
				"aliases": [],
				"description": "When encountering a non-ASCII message or subject that does not\ndeclare its encoding, add headers/quoting to indicate it is\nencoded in <encoding>.  Default is the value of the\nsendemail.assume8bitEncoding; if that is unspecified, this\nwill be prompted for if any non-ASCII files are encountered.\n\nNote that no attempts whatsoever are made to validate the encoding.",
				"isString": false
			},
			{
				"name": "compose-encoding",
				"aliases": [],
				"description": "Specify encoding of compose message. Default is the value of the\nsendemail.composeencoding; if that is unspecified, UTF-8 is assumed.",
				"isString": false
			},
			{
				"name": "transfer-encoding",
				"aliases": [],
				"description": "Specify the transfer encoding to be used to send the message over SMTP.\n7bit will fail upon encountering a non-ASCII message.  quoted-printable\ncan be useful when the repository contains files that contain carriage\nreturns, but makes the raw patch email file (as saved from a MUA) much\nharder to inspect manually.  base64 is even more fool proof, but also\neven more opaque.  auto will use 8bit when possible, and quoted-printable\notherwise.\n\nDefault is the value of the sendemail.transferEncoding configuration\nvalue; if that is unspecified, default to auto.",
				"isString": false
			},
			{
				"name": "no-xmailer",
				"aliases": [
					"xmailer"
				],
				"description": "Add (or prevent adding) the \"X-Mailer:\" header.  By default,\nthe header is added, but it can be turned off by setting the\nsendemail.xmailer configuration variable to false.",
				"isString": false
			}
		]
	},
	{
		"name": "request-pull",
		"description": "Generates a summary of pending changes",
		"flags": [
			{
				"name": "",
				"aliases": [],
				"description": "Include patch text in the output.",
				"isString": false
			},
			{
				"name": "<start>",
				"aliases": [],
				"description": "Commit to start at.  This names a commit that is already in\nthe upstream history.",
				"isString": true
			},
			{
				"name": "<url>",
				"aliases": [],
				"description": "The repository URL to be pulled from.",
				"isString": true
			},
			{
				"name": "<end>",
				"aliases": [],
				"description": "Commit to end at (defaults to HEAD).  This names the commit\nat the tip of the history you are asking to be pulled.\n\nWhen the repository named by <url> has the commit at a tip of a\nref that is different from the ref you have locally, you can use the\n<local>:<remote> syntax, to have its local name, a colon :, and\nits remote name.",
				"isString": true
			}
		]
	},
	{
		"name": "svn",
		"description": "Bidirectional operation between a Subversion repository and Git",
		"flags": [
			{
				"name": "shared",
				"aliases": [
					"template=<template_directory>"
				],
				"description": "Only used with the init command.\nThese are passed directly to git init.",
				"isString": false
			},
			{
				"name": "revision",
				"aliases": [
					"r"
				],
				"description": "Used with the fetch command.\n\nThis allows revision ranges for partial/cauterized history\nto be supported.  $NUMBER, $NUMBER1:$NUMBER2 (numeric ranges),\n$NUMBER:HEAD, and BASE:$NUMBER are all supported.\n\n\nThis can allow you to make partial mirrors when running fetch;\nbut is generally not recommended because history will be skipped\nand lost.",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [
					""
				],
				"description": "Only used with the set-tree command.\n\nRead a list of commits from stdin and commit them in reverse\norder.  Only the leading sha1 is read from each line, so\ngit rev-list --pretty=oneline output can be used.",
				"isString": false
			},
			{
				"name": "rmdir",
				"aliases": [],
				"description": "Only used with the dcommit, set-tree and commit-diff commands.\n\nRemove directories from the SVN tree if there are no files left\nbehind.  SVN can version empty directories, and they are not\nremoved by default if there are no files left in them.  Git\ncannot version empty directories.  Enabling this flag will make\nthe commit to SVN act like Git.\n\n\nconfig key: svn.rmdir",
				"isString": false
			},
			{
				"name": "edit",
				"aliases": [
					"e"
				],
				"description": "Only used with the dcommit, set-tree and commit-diff commands.\n\nEdit the commit message before committing to SVN.  This is off by\ndefault for objects that are commits, and forced on when committing\ntree objects.\n\n\nconfig key: svn.edit",
				"isString": false
			},
			{
				"name": "find-copies-harder",
				"aliases": [
					"l<num>"
				],
				"description": "Only used with the dcommit, set-tree and commit-diff commands.\n\nThey are both passed directly to git diff-tree; see\ngit-diff-tree[1] for more information.\n\n\nconfig key: svn.l\nconfig key: svn.findcopiesharder",
				"isString": false
			},
			{
				"name": "authors-file",
				"aliases": [
					"A<filename>"
				],
				"description": "Syntax is compatible with the file used by git cvsimport but\nan empty email address can be supplied with <>:\n\n\n\tloginname = Joe User <user@example.com>\n\n\n\nIf this option is specified and git svn encounters an SVN\ncommitter name that does not exist in the authors-file, git svn\nwill abort operation. The user will then have to add the\nappropriate entry.  Re-running the previous git svn command\nafter the authors-file is modified should continue operation.\n\n\nconfig key: svn.authorsfile",
				"isString": false
			},
			{
				"name": "authors-prog",
				"aliases": [],
				"description": "If this option is specified, for each SVN committer name that\ndoes not exist in the authors file, the given file is executed\nwith the committer name as the first argument.  The program is\nexpected to return a single line of the form \"Name <email>\" or\n\"Name <>\", which will be treated as if included in the authors\nfile.\n\nDue to historical reasons a relative filename is first searched\nrelative to the current directory for init and clone and relative\nto the root of the working tree for fetch. If filename is\nnot found, it is searched like any other command in $PATH.\n\n\nconfig key: svn.authorsProg",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Make git svn less verbose. Specify a second time to make it\neven less verbose.",
				"isString": false
			},
			{
				"name": "preserve-merges",
				"aliases": [
					"m",
					"merge",
					"s<strategy>",
					"strategy=<strategy>",
					"p",
					"rebase-merges"
				],
				"description": "These are only used with the dcommit and rebase commands.\n\nPassed directly to git rebase when using dcommit if a\ngit reset cannot be used (see dcommit).",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "This can be used with the dcommit, rebase, branch and\ntag commands.\n\nFor dcommit, print out the series of Git arguments that would show\nwhich diffs would be committed to SVN.\n\n\nFor rebase, display the local branch associated with the upstream svn\nrepository associated with the current branch and the URL of svn\nrepository that will be fetched from.\n\n\nFor branch and tag, display the urls that will be used for copying when\ncreating the branch or tag.",
				"isString": false
			},
			{
				"name": "use-log-author",
				"aliases": [],
				"description": "When retrieving svn commits into Git (as part of fetch, rebase, or\ndcommit operations), look for the first From: line or Signed-off-by trailer\nin the log message and use that as the author string.\n\nconfig key: svn.useLogAuthor",
				"isString": false
			},
			{
				"name": "add-author-from",
				"aliases": [],
				"description": "When committing to svn from Git (as part of set-tree or dcommit\noperations), if the existing log message doesn’t already have a\nFrom: or Signed-off-by trailer, append a From: line based on the\nGit commit’s author string.  If you use this, then --use-log-author\nwill retrieve a valid author string for all commits.\n\nconfig key: svn.addAuthorFrom",
				"isString": false
			}
		]
	},
	{
		"name": "fast-import",
		"description": "Backend for fast Git data importers",
		"flags": [
			{
				"name": "force",
				"aliases": [],
				"description": "Force updating modified existing branches, even if doing\nso would cause commits to be lost (as the new commit does\nnot contain the old commit).",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Disable the output shown by --stats, making fast-import usually\nbe silent when it is successful.  However, if the import stream\nhas directives intended to show user output (e.g. progress\ndirectives), the corresponding messages will still be shown.",
				"isString": false
			},
			{
				"name": "stats",
				"aliases": [],
				"description": "Display some basic statistics about the objects fast-import has\ncreated, the packfiles they were stored into, and the\nmemory used by fast-import during this run.  Showing this output\nis currently the default, but can be disabled with --quiet.",
				"isString": false
			},
			{
				"name": "allow-unsafe-features",
				"aliases": [],
				"description": "Many command-line options can be provided as part of the\nfast-import stream itself by using the feature or option\ncommands. However, some of these options are unsafe (e.g.,\nallowing fast-import to access the filesystem outside of the\nrepository). These options are disabled by default, but can be\nallowed by providing this option on the command line.  This\ncurrently impacts only the export-marks, import-marks, and\nimport-marks-if-exists feature commands.\n\n\nOnly enable this option if you trust the program generating the\nfast-import stream! This option is enabled automatically for\nremote-helpers that use the `import` capability, as they are\nalready trusted to run their own code.",
				"isString": false
			}
		]
	},
	{
		"name": "clean",
		"description": "Remove untracked files from the working tree",
		"flags": [
			{
				"name": "",
				"aliases": [],
				"description": "Normally, when no <path> is specified, git clean will not\nrecurse into untracked directories to avoid removing too much.\nSpecify -d to have it recurse into such directories as well.\nIf any paths are specified, -d is irrelevant; all untracked\nfiles matching the specified paths (with exceptions for nested\ngit directories mentioned under --force) will be removed.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "If the Git configuration variable clean.requireForce is not set\nto false, git clean will refuse to delete files or directories\nunless given -f or -i.  Git will refuse to modify untracked\nnested git repositories (directories with a .git subdirectory)\nunless a second -f is given.",
				"isString": false
			},
			{
				"name": "interactive",
				"aliases": [
					"i"
				],
				"description": "Show what would be done and clean files interactively. See\n“Interactive mode” for details.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Don’t actually remove anything, just show what would be done.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Be quiet, only report errors, but not the files that are\nsuccessfully removed.",
				"isString": false
			},
			{
				"name": "exclude",
				"aliases": [
					"e"
				],
				"description": "Use the given exclude pattern in addition to the standard ignore rules\n(see gitignore[5]).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Don’t use the standard ignore rules (see gitignore[5]), but\nstill use the ignore rules given with -e options from the command\nline.  This allows removing all untracked\nfiles, including build products.  This can be used (possibly in\nconjunction with git restore or git reset) to create a pristine\nworking directory to test a clean build.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Remove only files ignored by Git.  This may be useful to rebuild\neverything from scratch, but keep manually created files.",
				"isString": false
			}
		]
	},
	{
		"name": "gc",
		"description": "Cleanup unnecessary files and optimize the local repository",
		"flags": [
			{
				"name": "aggressive",
				"aliases": [],
				"description": "Usually git gc runs very quickly while providing good disk\nspace utilization and performance.  This option will cause\ngit gc to more aggressively optimize the repository at the expense\nof taking much more time.  The effects of this optimization are\nmostly persistent. See the \"AGGRESSIVE\" section below for details.",
				"isString": false
			},
			{
				"name": "auto",
				"aliases": [],
				"description": "With this option, git gc checks whether any housekeeping is\nrequired; if not, it exits without performing any work.\n\nSee the gc.auto option in the \"CONFIGURATION\" section below for how\nthis heuristic works.\n\n\nOnce housekeeping is triggered by exceeding the limits of\nconfiguration options such as gc.auto and gc.autoPackLimit, all\nother housekeeping tasks (e.g. rerere, working trees, reflog…​) will\nbe performed as well.",
				"isString": false
			},
			{
				"name": "prune",
				"aliases": [],
				"description": "Prune loose objects older than date (default is 2 weeks ago,\noverridable by the config variable gc.pruneExpire).\n--prune=now prunes loose objects regardless of their age and\nincreases the risk of corruption if another process is writing to\nthe repository concurrently; see \"NOTES\" below. --prune is on by\ndefault.",
				"isString": false
			},
			{
				"name": "no-prune",
				"aliases": [],
				"description": "Do not prune any loose objects.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Suppress all progress reports.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [],
				"description": "Force git gc to run even if there may be another git gc\ninstance running on this repository.",
				"isString": false
			},
			{
				"name": "keep-largest-pack",
				"aliases": [],
				"description": "All packs except the largest pack and those marked with a\n.keep files are consolidated into a single pack. When this\noption is used, gc.bigPackThreshold is ignored.",
				"isString": false
			}
		]
	},
	{
		"name": "fsck",
		"description": "Verifies the connectivity and validity of the objects in the database",
		"flags": [
			{
				"name": "<object>",
				"aliases": [],
				"description": "An object to treat as the head of an unreachability trace.\n\nIf no objects are given, git fsck defaults to using the\nindex file, all SHA-1 references in refs namespace, and all reflogs\n(unless --no-reflogs is given) as heads.",
				"isString": true
			},
			{
				"name": "unreachable",
				"aliases": [],
				"description": "Print out objects that exist but that aren’t reachable from any\nof the reference nodes.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Print objects that exist but that are never directly used (default).\n--no-dangling can be used to omit this information from the output.",
				"isString": false
			},
			{
				"name": "root",
				"aliases": [],
				"description": "Report root nodes.",
				"isString": false
			},
			{
				"name": "tags",
				"aliases": [],
				"description": "Report tags.",
				"isString": false
			},
			{
				"name": "cache",
				"aliases": [],
				"description": "Consider any object recorded in the index also as a head node for\nan unreachability trace.",
				"isString": false
			},
			{
				"name": "no-reflogs",
				"aliases": [],
				"description": "Do not consider commits that are referenced only by an\nentry in a reflog to be reachable.  This option is meant\nonly to search for commits that used to be in a ref, but\nnow aren’t, but are still in that corresponding reflog.",
				"isString": false
			},
			{
				"name": "full",
				"aliases": [],
				"description": "Check not just objects in GIT_OBJECT_DIRECTORY\n($GIT_DIR/objects), but also the ones found in alternate\nobject pools listed in GIT_ALTERNATE_OBJECT_DIRECTORIES\nor $GIT_DIR/objects/info/alternates,\nand in packed Git archives found in $GIT_DIR/objects/pack\nand corresponding pack subdirectories in alternate\nobject pools.  This is now default; you can turn it off\nwith --no-full.",
				"isString": false
			},
			{
				"name": "connectivity-only",
				"aliases": [],
				"description": "Check only the connectivity of reachable objects, making sure\nthat any objects referenced by a reachable tag, commit, or tree\nis present. This speeds up the operation by avoiding reading\nblobs entirely (though it does still check that referenced blobs\nexist). This will detect corruption in commits and trees, but\nnot do any semantic checks (e.g., for format errors). Corruption\nin blob objects will not be detected at all.\n\nUnreachable tags, commits, and trees will also be accessed to find the\ntips of dangling segments of history. Use --no-dangling if you don’t\ncare about this output and want to speed it up further.",
				"isString": false
			},
			{
				"name": "strict",
				"aliases": [],
				"description": "Enable more strict checking, namely to catch a file mode\nrecorded with g+w bit set, which was created by older\nversions of Git.  Existing repositories, including the\nLinux kernel, Git itself, and sparse repository have old\nobjects that triggers this check, but it is recommended\nto check new projects with this flag.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [],
				"description": "Be chatty.",
				"isString": false
			},
			{
				"name": "lost-found",
				"aliases": [],
				"description": "Write dangling objects into .git/lost-found/commit/ or\n.git/lost-found/other/, depending on type.  If the object is\na blob, the contents are written into the file, rather than\nits object name.",
				"isString": false
			},
			{
				"name": "name-objects",
				"aliases": [],
				"description": "When displaying names of reachable objects, in addition to the\nSHA-1 also display a name that describes how they are reachable,\ncompatible with git-rev-parse[1], e.g.\nHEAD@{1234567890}~25^2:src/.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Progress status is reported on the standard error stream by\ndefault when it is attached to a terminal, unless\n--no-progress or --verbose is specified. --progress forces\nprogress status even if the standard error stream is not\ndirected to a terminal.",
				"isString": false
			}
		]
	},
	{
		"name": "reflog",
		"description": "Manage reflog information",
		"flags": [
			{
				"name": "all",
				"aliases": [],
				"description": "Process the reflogs of all references.",
				"isString": false
			},
			{
				"name": "single-worktree",
				"aliases": [],
				"description": "By default when --all is specified, reflogs from all working\ntrees are processed. This option limits the processing to reflogs\nfrom the current working tree only.",
				"isString": false
			},
			{
				"name": "expire",
				"aliases": [],
				"description": "Prune entries older than the specified time. If this option is\nnot specified, the expiration time is taken from the\nconfiguration setting gc.reflogExpire, which in turn\ndefaults to 90 days. --expire=all prunes entries regardless\nof their age; --expire=never turns off pruning of reachable\nentries (but see --expire-unreachable).",
				"isString": false
			},
			{
				"name": "expire-unreachable",
				"aliases": [],
				"description": "Prune entries older than <time> that are not reachable from\nthe current tip of the branch. If this option is not\nspecified, the expiration time is taken from the configuration\nsetting gc.reflogExpireUnreachable, which in turn defaults\nto 30 days. --expire-unreachable=all prunes unreachable\nentries regardless of their age; --expire-unreachable=never\nturns off early pruning of unreachable entries (but see\n--expire).",
				"isString": false
			},
			{
				"name": "updateref",
				"aliases": [],
				"description": "Update the reference to the value of the top reflog entry (i.e.\n<ref>@{0}) if the previous top entry was pruned.  (This\noption is ignored for symbolic references.)",
				"isString": false
			},
			{
				"name": "rewrite",
				"aliases": [],
				"description": "If a reflog entry’s predecessor is pruned, adjust its \"old\"\nSHA-1 to be equal to the \"new\" SHA-1 field of the entry that\nnow precedes it.",
				"isString": false
			},
			{
				"name": "stale-fix",
				"aliases": [],
				"description": "Prune any reflog entries that point to \"broken commits\". A\nbroken commit is a commit that is not reachable from any of\nthe reference tips and that refers, directly or indirectly, to\na missing commit, tree, or blob object.\n\nThis computation involves traversing all the reachable objects, i.e. it\nhas the same cost as git prune.  It is primarily intended to fix\ncorruption caused by garbage collecting using older versions of Git,\nwhich didn’t protect objects referred to by reflogs.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Do not actually prune any entries; just show what would have\nbeen pruned.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [],
				"description": "Print extra information on screen.",
				"isString": false
			}
		]
	},
	{
		"name": "filter-branch",
		"description": "Rewrite branches",
		"flags": [
			{
				"name": "setup",
				"aliases": [],
				"description": "This is not a real filter executed for each commit but a one\ntime setup just before the loop. Therefore no commit-specific\nvariables are defined yet.  Functions or variables defined here\ncan be used or modified in the following filter steps except\nthe commit filter, for technical reasons.",
				"isString": false
			},
			{
				"name": "subdirectory-filter",
				"aliases": [],
				"description": "Only look at the history which touches the given subdirectory.\nThe result will contain that directory (and only that) as its\nproject root. Implies Remap to ancestor.",
				"isString": false
			},
			{
				"name": "env-filter",
				"aliases": [],
				"description": "This filter may be used if you only need to modify the environment\nin which the commit will be performed.  Specifically, you might\nwant to rewrite the author/committer name/email/time environment\nvariables (see git-commit-tree[1] for details).",
				"isString": false
			},
			{
				"name": "tree-filter",
				"aliases": [],
				"description": "This is the filter for rewriting the tree and its contents.\nThe argument is evaluated in shell with the working\ndirectory set to the root of the checked out tree.  The new tree\nis then used as-is (new files are auto-added, disappeared files\nare auto-removed - neither .gitignore files nor any other ignore\nrules HAVE ANY EFFECT!).",
				"isString": false
			},
			{
				"name": "index-filter",
				"aliases": [],
				"description": "This is the filter for rewriting the index.  It is similar to the\ntree filter but does not check out the tree, which makes it much\nfaster.  Frequently used with git rm --cached\n--ignore-unmatch ..., see EXAMPLES below.  For hairy\ncases, see git-update-index[1].",
				"isString": false
			},
			{
				"name": "parent-filter",
				"aliases": [],
				"description": "This is the filter for rewriting the commit’s parent list.\nIt will receive the parent string on stdin and shall output\nthe new parent string on stdout.  The parent string is in\nthe format described in git-commit-tree[1]: empty for\nthe initial commit, \"-p parent\" for a normal commit and\n\"-p parent1 -p parent2 -p parent3 …​\" for a merge commit.",
				"isString": false
			},
			{
				"name": "msg-filter",
				"aliases": [],
				"description": "This is the filter for rewriting the commit messages.\nThe argument is evaluated in the shell with the original\ncommit message on standard input; its standard output is\nused as the new commit message.",
				"isString": false
			},
			{
				"name": "commit-filter",
				"aliases": [],
				"description": "This is the filter for performing the commit.\nIf this filter is specified, it will be called instead of the\ngit commit-tree command, with arguments of the form\n\"<TREE_ID> [(-p <PARENT_COMMIT_ID>)…​]\" and the log message on\nstdin.  The commit id is expected on stdout.\n\nAs a special extension, the commit filter may emit multiple\ncommit ids; in that case, the rewritten children of the original commit will\nhave all of them as parents.\n\n\nYou can use the map convenience function in this filter, and other\nconvenience functions, too.  For example, calling skip_commit \"$@\"\nwill leave out the current commit (but not its changes! If you want\nthat, use git rebase instead).\n\n\nYou can also use the git_commit_non_empty_tree \"$@\" instead of\ngit commit-tree \"$@\" if you don’t wish to keep commits with a single parent\nand that makes no change to the tree.",
				"isString": false
			},
			{
				"name": "tag-name-filter",
				"aliases": [],
				"description": "This is the filter for rewriting tag names. When passed,\nit will be called for every tag ref that points to a rewritten\nobject (or to a tag object which points to a rewritten object).\nThe original tag name is passed via standard input, and the new\ntag name is expected on standard output.\n\nThe original tags are not deleted, but can be overwritten;\nuse \"--tag-name-filter cat\" to simply update the tags.  In this\ncase, be very careful and make sure you have the old tags\nbacked up in case the conversion has run afoul.\n\n\nNearly proper rewriting of tag objects is supported. If the tag has\na message attached, a new tag object will be created with the same message,\nauthor, and timestamp. If the tag has a signature attached, the\nsignature will be stripped. It is by definition impossible to preserve\nsignatures. The reason this is \"nearly\" proper, is because ideally if\nthe tag did not change (points to the same object, has the same name, etc.)\nit should retain any signature. That is not the case, signatures will always\nbe removed, buyer beware. There is also no support for changing the\nauthor or timestamp (or the tag message for that matter). Tags which point\nto other tags will be rewritten to point to the underlying commit.",
				"isString": false
			},
			{
				"name": "prune-empty",
				"aliases": [],
				"description": "Some filters will generate empty commits that leave the tree untouched.\nThis option instructs git-filter-branch to remove such commits if they\nhave exactly one or zero non-pruned parents; merge commits will\ntherefore remain intact.  This option cannot be used together with\n--commit-filter, though the same effect can be achieved by using the\nprovided git_commit_non_empty_tree function in a commit filter.",
				"isString": false
			},
			{
				"name": "original",
				"aliases": [],
				"description": "Use this option to set the namespace where the original commits\nwill be stored. The default value is refs/original.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Use this option to set the path to the temporary directory used for\nrewriting.  When applying a tree filter, the command needs to\ntemporarily check out the tree to some directory, which may consume\nconsiderable space in case of large projects.  By default it\ndoes this in the .git-rewrite/ directory but you can override\nthat choice by this parameter.",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "git filter-branch refuses to start with an existing temporary\ndirectory or when there are already refs starting with\nrefs/original/, unless forced.",
				"isString": false
			},
			{
				"name": "state-branch",
				"aliases": [],
				"description": "This option will cause the mapping from old to new objects to\nbe loaded from named branch upon startup and saved as a new\ncommit to that branch upon exit, enabling incremental of large\ntrees. If <branch> does not exist it will be created.",
				"isString": false
			},
			{
				"name": "<rev-list options>…​",
				"aliases": [],
				"description": "Arguments for git rev-list.  All positive refs included by\nthese options are rewritten.  You may also specify options\nsuch as --all, but you must use -- to separate them from\nthe git filter-branch options. Implies Remap to ancestor.",
				"isString": true
			}
		]
	},
	{
		"name": "instaweb",
		"description": "Instantly browse your working repository in gitweb",
		"flags": [
			{
				"name": "local",
				"aliases": [
					"l"
				],
				"description": "Only bind the web server to the local IP (127.0.0.1).",
				"isString": false
			},
			{
				"name": "httpd",
				"aliases": [
					"d"
				],
				"description": "The HTTP daemon command-line that will be executed.\nCommand-line options may be specified here, and the\nconfiguration file will be added at the end of the command-line.\nCurrently apache2, lighttpd, mongoose, plackup, python and\nwebrick are supported.\n(Default: lighttpd)",
				"isString": false
			},
			{
				"name": "module-path",
				"aliases": [
					"m"
				],
				"description": "The module path (only needed if httpd is Apache).\n(Default: /usr/lib/apache2/modules)",
				"isString": false
			},
			{
				"name": "port",
				"aliases": [
					"p"
				],
				"description": "The port number to bind the httpd to.  (Default: 1234)",
				"isString": false
			},
			{
				"name": "browser",
				"aliases": [
					"b"
				],
				"description": "The web browser that should be used to view the gitweb\npage. This will be passed to the git web--browse helper\nscript along with the URL of the gitweb instance. See\ngit-web--browse[1] for more information about this. If\nthe script fails, the URL will be printed to stdout.",
				"isString": false
			},
			{
				"name": "start",
				"aliases": [
					"start"
				],
				"description": "Start the httpd instance and exit.  Regenerate configuration files\nas necessary for spawning a new instance.",
				"isString": false
			},
			{
				"name": "stop",
				"aliases": [
					"stop"
				],
				"description": "Stop the httpd instance and exit.  This does not generate\nany of the configuration files for spawning a new instance,\nnor does it close the browser.",
				"isString": false
			},
			{
				"name": "restart",
				"aliases": [
					"restart"
				],
				"description": "Restart the httpd instance and exit.  Regenerate configuration files\nas necessary for spawning a new instance.",
				"isString": false
			}
		]
	},
	{
		"name": "archive",
		"description": "Create an archive of files from a named tree",
		"flags": [
			{
				"name": "format",
				"aliases": [],
				"description": "Format of the resulting archive: tar or zip. If this option\nis not given, and the output file is specified, the format is\ninferred from the filename if possible (e.g. writing to \"foo.zip\"\nmakes the output to be in the zip format). Otherwise the output\nformat is tar.",
				"isString": false
			},
			{
				"name": "list",
				"aliases": [
					"l"
				],
				"description": "Show all available formats.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Report progress to stderr.",
				"isString": false
			},
			{
				"name": "prefix",
				"aliases": [],
				"description": "Prepend <prefix>/ to each filename in the archive.",
				"isString": false
			},
			{
				"name": "output",
				"aliases": [
					"o"
				],
				"description": "Write the archive to <file> instead of stdout.",
				"isString": false
			},
			{
				"name": "add-file",
				"aliases": [],
				"description": "Add a non-tracked file to the archive.  Can be repeated to add\nmultiple files.  The path of the file in the archive is built\nby concatenating the value for --prefix (if any) and the\nbasename of <file>.",
				"isString": false
			},
			{
				"name": "worktree-attributes",
				"aliases": [],
				"description": "Look for attributes in .gitattributes files in the working tree\nas well (see ATTRIBUTES).",
				"isString": false
			},
			{
				"name": "<extra>",
				"aliases": [],
				"description": "This can be any options that the archiver backend understands.\nSee next section.",
				"isString": true
			},
			{
				"name": "remote",
				"aliases": [],
				"description": "Instead of making a tar archive from the local repository,\nretrieve a tar archive from a remote repository. Note that the\nremote repository may place restrictions on which sha1\nexpressions may be allowed in <tree-ish>. See\ngit-upload-archive[1] for details.",
				"isString": false
			},
			{
				"name": "exec",
				"aliases": [],
				"description": "Used with --remote to specify the path to the\ngit-upload-archive on the remote side.",
				"isString": false
			},
			{
				"name": "<tree-ish>",
				"aliases": [],
				"description": "The tree or commit to produce an archive for.",
				"isString": true
			},
			{
				"name": "<path>",
				"aliases": [],
				"description": "Without an optional path parameter, all files and subdirectories\nof the current working directory are included in the archive.\nIf one or more paths are specified, only these are included.",
				"isString": true
			}
		]
	},
	{
		"name": "bundle",
		"description": "Move objects and refs by archive",
		"flags": [
			{
				"name": "eate",
				"aliases": [],
				"description": "Used to create a bundle named file.  This requires the\n<git-rev-list-args> arguments to define the bundle contents.\noptions contains the options specific to the git bundle create\nsubcommand.",
				"isString": false
			},
			{
				"name": "rify",
				"aliases": [],
				"description": "Used to check that a bundle file is valid and will apply\ncleanly to the current repository.  This includes checks on the\nbundle format itself as well as checking that the prerequisite\ncommits exist and are fully linked in the current repository.\ngit bundle prints a list of missing commits, if any, and exits\nwith a non-zero status.",
				"isString": false
			},
			{
				"name": "st-heads",
				"aliases": [],
				"description": "Lists the references defined in the bundle.  If followed by a\nlist of references, only references matching those given are\nprinted out.",
				"isString": false
			},
			{
				"name": "bundle",
				"aliases": [],
				"description": "Passes the objects in the bundle to git index-pack\nfor storage in the repository, then prints the names of all\ndefined references. If a list of references is given, only\nreferences matching those in the list are printed. This command is\nreally plumbing, intended to be called only by git fetch.",
				"isString": false
			},
			{
				"name": "<git-rev-list-args>",
				"aliases": [],
				"description": "A list of arguments, acceptable to git rev-parse and\ngit rev-list (and containing a named ref, see SPECIFYING REFERENCES\nbelow), that specifies the specific objects and references\nto transport.  For example, master~10..master causes the\ncurrent master reference to be packaged along with all objects\nadded since its 10th ancestor commit.  There is no explicit\nlimit to the number of references and objects that may be\npackaged.",
				"isString": true
			},
			{
				"name": "[<refname>…​]",
				"aliases": [],
				"description": "A list of references used to limit the references reported as\navailable. This is principally of use to git fetch, which\nexpects to receive only those references asked for and not\nnecessarily everything in the pack (in this case, git bundle acts\nlike git fetch-pack).",
				"isString": true
			},
			{
				"name": "progress",
				"aliases": [],
				"description": "Progress status is reported on the standard error stream\nby default when it is attached to a terminal, unless -q\nis specified. This flag forces progress status even if\nthe standard error stream is not directed to a terminal.",
				"isString": false
			},
			{
				"name": "all-progress",
				"aliases": [],
				"description": "When --stdout is specified then progress report is\ndisplayed during the object count and compression phases\nbut inhibited during the write-out phase. The reason is\nthat in some cases the output stream is directly linked\nto another command which may wish to display progress\nstatus of its own as it processes incoming pack data.\nThis flag is like --progress except that it forces progress\nreport for the write-out phase as well even if --stdout is\nused.",
				"isString": false
			},
			{
				"name": "all-progress-implied",
				"aliases": [],
				"description": "This is used to imply --all-progress whenever progress display\nis activated.  Unlike --all-progress this flag doesn’t actually\nforce any progress display by itself.",
				"isString": false
			},
			{
				"name": "version",
				"aliases": [],
				"description": "Specify the bundle version.  Version 2 is the older format and can only be\nused with SHA-1 repositories; the newer version 3 contains capabilities that\npermit extensions. The default is the oldest supported format, based on the\nhash algorithm in use.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "This flag makes the command not to report its progress\non the standard error stream.",
				"isString": false
			}
		]
	},
	{
		"name": "daemon",
		"description": "A really simple server for Git repositories",
		"flags": [
			{
				"name": "strict-paths",
				"aliases": [],
				"description": "Match paths exactly (i.e. don’t allow \"/foo/repo\" when the real path is\n\"/foo/repo.git\" or \"/foo/repo/.git\") and don’t do user-relative paths.\ngit daemon will refuse to start when this option is enabled and no\nwhitelist is specified.",
				"isString": false
			},
			{
				"name": "base-path",
				"aliases": [],
				"description": "Remap all the path requests as relative to the given path.\nThis is sort of \"Git root\" - if you run git daemon with\n--base-path=/srv/git on example.com, then if you later try to pull\ngit://example.com/hello.git, git daemon will interpret the path\nas /srv/git/hello.git.",
				"isString": false
			},
			{
				"name": "base-path-relaxed",
				"aliases": [],
				"description": "If --base-path is enabled and repo lookup fails, with this option\ngit daemon will attempt to lookup without prefixing the base path.\nThis is useful for switching to --base-path usage, while still\nallowing the old paths.",
				"isString": false
			},
			{
				"name": "interpolated-path",
				"aliases": [],
				"description": "To support virtual hosting, an interpolated path template can be\nused to dynamically construct alternate paths.  The template\nsupports %H for the target hostname as supplied by the client but\nconverted to all lowercase, %CH for the canonical hostname,\n%IP for the server’s IP address, %P for the port number,\nand %D for the absolute path of the named repository.\nAfter interpolation, the path is validated against the directory\nwhitelist.",
				"isString": false
			},
			{
				"name": "export-all",
				"aliases": [],
				"description": "Allow pulling from all directories that look like Git repositories\n(have the objects and refs subdirectories), even if they\ndo not have the git-daemon-export-ok file.",
				"isString": false
			},
			{
				"name": "inetd",
				"aliases": [],
				"description": "Have the server run as an inetd service. Implies --syslog (may be\noverridden with --log-destination=).\nIncompatible with --detach, --port, --listen, --user and --group\noptions.",
				"isString": false
			},
			{
				"name": "listen",
				"aliases": [],
				"description": "Listen on a specific IP address or hostname.  IP addresses can\nbe either an IPv4 address or an IPv6 address if supported.  If IPv6\nis not supported, then --listen=hostname is also not supported and\n--listen must be given an IPv4 address.\nCan be given more than once.\nIncompatible with --inetd option.",
				"isString": false
			},
			{
				"name": "port",
				"aliases": [],
				"description": "Listen on an alternative port.  Incompatible with --inetd option.",
				"isString": false
			},
			{
				"name": "init-timeout",
				"aliases": [],
				"description": "Timeout (in seconds) between the moment the connection is established\nand the client request is received (typically a rather low value, since\nthat should be basically immediate).",
				"isString": false
			},
			{
				"name": "timeout",
				"aliases": [],
				"description": "Timeout (in seconds) for specific client sub-requests. This includes\nthe time it takes for the server to process the sub-request and the\ntime spent waiting for the next client’s request.",
				"isString": false
			},
			{
				"name": "max-connections",
				"aliases": [],
				"description": "Maximum number of concurrent clients, defaults to 32.  Set it to\nzero for no limit.",
				"isString": false
			},
			{
				"name": "syslog",
				"aliases": [],
				"description": "Short for --log-destination=syslog.",
				"isString": false
			},
			{
				"name": "log-destination",
				"aliases": [],
				"description": "Send log messages to the specified destination.\nNote that this option does not imply --verbose,\nthus by default only error conditions will be logged.\nThe <destination> must be one of:\n\n\n\n\n stderr \n\nWrite to standard error.\nNote that if --detach is specified,\nthe process disconnects from the real standard error,\nmaking this destination effectively equivalent to none.\n\n syslog \n\nWrite to syslog, using the git-daemon identifier.\n\n none \n\nDisable all logging.\n\n\n\n\n\n\nThe default destination is syslog if --inetd or --detach is specified,\notherwise stderr.",
				"isString": false
			},
			{
				"name": "user-path",
				"aliases": [
					"user-path"
				],
				"description": "Allow ~user notation to be used in requests.  When\nspecified with no parameter, requests to\ngit://host/~alice/foo is taken as a request to access\nfoo repository in the home directory of user alice.\nIf --user-path=path is specified, the same request is\ntaken as a request to access path/foo repository in\nthe home directory of user alice.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [],
				"description": "Log details about the incoming connections and requested files.",
				"isString": false
			},
			{
				"name": "reuseaddr",
				"aliases": [],
				"description": "Use SO_REUSEADDR when binding the listening socket.\nThis allows the server to restart without waiting for\nold connections to time out.",
				"isString": false
			},
			{
				"name": "detach",
				"aliases": [],
				"description": "Detach from the shell. Implies --syslog.",
				"isString": false
			},
			{
				"name": "pid-file",
				"aliases": [],
				"description": "Save the process id in file.  Ignored when the daemon\nis run under --inetd.",
				"isString": false
			},
			{
				"name": "group",
				"aliases": [
					"user=<user>"
				],
				"description": "Change daemon’s uid and gid before entering the service loop.\nWhen only --user is given without --group, the\nprimary group ID for the user is used.  The values of\nthe option are given to getpwnam(3) and getgrnam(3)\nand numeric IDs are not supported.\n\nGiving these options is an error when used with --inetd; use\nthe facility of inet daemon to achieve the same before spawning\ngit daemon if needed.\n\n\nLike many programs that switch user id, the daemon does not reset\nenvironment variables such as $HOME when it runs git programs,\ne.g. upload-pack and receive-pack. When using this option, you\nmay also want to set and export HOME to point at the home\ndirectory of <user> before starting the daemon, and make sure any\nGit configuration files in that directory are readable by <user>.",
				"isString": false
			},
			{
				"name": "disable",
				"aliases": [
					"enable=<service>"
				],
				"description": "Enable/disable the service site-wide per default.  Note\nthat a service disabled site-wide can still be enabled\nper repository if it is marked overridable and the\nrepository enables the service with a configuration\nitem.",
				"isString": false
			},
			{
				"name": "forbid-override",
				"aliases": [
					"allow-override=<service>"
				],
				"description": "Allow/forbid overriding the site-wide default with per\nrepository configuration.  By default, all the services\nmay be overridden.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When informative errors are turned on, git-daemon will report\nmore verbose errors to the client, differentiating conditions\nlike \"no such repository\" from \"repository not exported\". This\nis more convenient for clients, but may leak information about\nthe existence of unexported repositories.  When informative\nerrors are not enabled, all errors report \"access denied\" to the\nclient. The default is --no-informative-errors.",
				"isString": false
			},
			{
				"name": "access-hook",
				"aliases": [],
				"description": "Every time a client connects, first run an external command\nspecified by the <path> with service name (e.g. \"upload-pack\"),\npath to the repository, hostname (%H), canonical hostname\n(%CH), IP address (%IP), and TCP port (%P) as its command-line\narguments. The external command can decide to decline the\nservice by exiting with a non-zero status (or to allow it by\nexiting with a zero status).  It can also look at the $REMOTE_ADDR\nand $REMOTE_PORT environment variables to learn about the\nrequestor when making this decision.\n\nThe external command can optionally write a single line to its\nstandard output to be sent to the requestor as an error message when\nit declines the service.",
				"isString": false
			},
			{
				"name": "<directory>",
				"aliases": [],
				"description": "A directory to add to the whitelist of allowed directories. Unless\n--strict-paths is specified this will also include subdirectories\nof each named directory.",
				"isString": true
			}
		]
	},
	{
		"name": "cat-file",
		"description": "Provide content or type and size information for repository objects",
		"flags": [
			{
				"name": "<object>",
				"aliases": [],
				"description": "The name of the object to show.\nFor a more complete list of ways to spell object names, see\nthe \"SPECIFYING REVISIONS\" section in gitrevisions[7].",
				"isString": true
			},
			{
				"name": "",
				"aliases": [],
				"description": "Instead of the content, show the object type identified by\n<object>.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Instead of the content, show the object size identified by\n<object>.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Exit with zero status if <object> exists and is a valid\nobject. If <object> is of an invalid format exit with non-zero and\nemits an error on stderr.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Pretty-print the contents of <object> based on its type.",
				"isString": false
			},
			{
				"name": "<type>",
				"aliases": [],
				"description": "Typically this matches the real type of <object> but asking\nfor a type that can trivially be dereferenced from the given\n<object> is also permitted.  An example is to ask for a\n\"tree\" with <object> being a commit object that contains it,\nor to ask for a \"blob\" with <object> being a tag object that\npoints at it.",
				"isString": true
			},
			{
				"name": "textconv",
				"aliases": [],
				"description": "Show the content as transformed by a textconv filter. In this case,\n<object> has to be of the form <tree-ish>:<path>, or :<path> in\norder to apply the filter to the content recorded in the index at\n<path>.",
				"isString": false
			},
			{
				"name": "filters",
				"aliases": [],
				"description": "Show the content as converted by the filters configured in\nthe current working tree for the given <path> (i.e. smudge filters,\nend-of-line conversion, etc). In this case, <object> has to be of\nthe form <tree-ish>:<path>, or :<path>.",
				"isString": false
			},
			{
				"name": "path",
				"aliases": [],
				"description": "For use with --textconv or --filters, to allow specifying an object\nname and a path separately, e.g. when it is difficult to figure out\nthe revision from which the blob came.",
				"isString": false
			},
			{
				"name": "batch",
				"aliases": [
					"batch"
				],
				"description": "Print object information and contents for each object provided\non stdin.  May not be combined with any other options or arguments\nexcept --textconv or --filters, in which case the input lines\nalso need to specify the path, separated by whitespace.  See the\nsection BATCH OUTPUT below for details.",
				"isString": false
			},
			{
				"name": "batch-check",
				"aliases": [
					"batch-check"
				],
				"description": "Print object information for each object provided on stdin.  May\nnot be combined with any other options or arguments except\n--textconv or --filters, in which case the input lines also\nneed to specify the path, separated by whitespace.  See the\nsection BATCH OUTPUT below for details.",
				"isString": false
			},
			{
				"name": "batch-all-objects",
				"aliases": [],
				"description": "Instead of reading a list of objects on stdin, perform the\nrequested batch operation on all objects in the repository and\nany alternate object stores (not just reachable objects).\nRequires --batch or --batch-check be specified. Note that\nthe objects are visited in order sorted by their hashes.",
				"isString": false
			},
			{
				"name": "buffer",
				"aliases": [],
				"description": "Normally batch output is flushed after each object is output, so\nthat a process can interactively read and write from\ncat-file. With this option, the output uses normal stdio\nbuffering; this is much more efficient when invoking\n--batch-check on a large number of objects.",
				"isString": false
			},
			{
				"name": "unordered",
				"aliases": [],
				"description": "When --batch-all-objects is in use, visit objects in an\norder which may be more efficient for accessing the object\ncontents than hash order. The exact details of the order are\nunspecified, but if you do not require a specific order, this\nshould generally result in faster output, especially with\n--batch.  Note that cat-file will still show each object\nonly once, even if it is stored multiple times in the\nrepository.",
				"isString": false
			},
			{
				"name": "allow-unknown-type",
				"aliases": [],
				"description": "Allow -s or -t to query broken/corrupt objects of unknown type.",
				"isString": false
			},
			{
				"name": "follow-symlinks",
				"aliases": [],
				"description": "With --batch or --batch-check, follow symlinks inside the\nrepository when requesting objects with extended SHA-1\nexpressions of the form tree-ish:path-in-tree.  Instead of\nproviding output about the link itself, provide output about\nthe linked-to object.  If a symlink points outside the\ntree-ish (e.g. a link to /foo or a root-level link to ../foo),\nthe portion of the link which is outside the tree will be\nprinted.\n\nThis option does not (currently) work correctly when an object in the\nindex is specified (e.g. :link instead of HEAD:link) rather than\none in the tree.\n\n\nThis option cannot (currently) be used unless --batch or\n--batch-check is used.\n\n\nFor example, consider a git repository containing:\n\n\n\n\n\nf: a file containing \"hello\\n\"\nlink: a symlink to f\ndir/link: a symlink to ../f\nplink: a symlink to ../f\nalink: a symlink to /etc/passwd\n\n\n\n\n\nFor a regular file f, echo HEAD:f | git cat-file --batch would print\n\n\n\n\n\nce013625030ba8dba906f756967f9e9ca394464a blob 6\n\n\n\n\n\nAnd echo HEAD:link | git cat-file --batch --follow-symlinks would\nprint the same thing, as would HEAD:dir/link, as they both point at\nHEAD:f.\n\n\nWithout --follow-symlinks, these would print data about the symlink\nitself.  In the case of HEAD:link, you would see\n\n\n\n\n\n4d1ae35ba2c8ec712fa2a379db44ad639ca277bd blob 1\n\n\n\n\n\nBoth plink and alink point outside the tree, so they would\nrespectively print:\n\n\n\n\n\nsymlink 4\n../f\n\n\n\n\nsymlink 11\n/etc/passwd",
				"isString": false
			}
		]
	},
	{
		"name": "check-ignore",
		"description": "Debug gitignore / exclude files",
		"flags": [
			{
				"name": "",
				"aliases": [],
				"description": "Don’t output anything, just set exit status.  This is only\nvalid with a single pathname.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Instead of printing the paths that are excluded, for each path\nthat matches an exclude pattern, print the exclude pattern\ntogether with the path.  (Matching an exclude pattern usually\nmeans the path is excluded, but if the pattern begins with !\nthen it is a negated pattern and matching it means the path is\nNOT excluded.)\n\nFor precedence rules within and between exclude sources, see\ngitignore[5].",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "Read pathnames from the standard input, one per line,\ninstead of from the command-line.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The output format is modified to be machine-parsable (see\nbelow).  If --stdin is also given, input paths are separated\nwith a NUL character instead of a linefeed character.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show given paths which don’t match any pattern.\t This only\nmakes sense when --verbose is enabled, otherwise it would\nnot be possible to distinguish between paths which match a\npattern and those which don’t.",
				"isString": false
			},
			{
				"name": "no-index",
				"aliases": [],
				"description": "Don’t look in the index when undertaking the checks. This can\nbe used to debug why a path became tracked by e.g. git add .\nand was not ignored by the rules as expected by the user or when\ndeveloping patterns including negation to match a path previously\nadded with git add -f.",
				"isString": false
			}
		]
	},
	{
		"name": "checkout-index",
		"description": "Copy files from the index to the working tree",
		"flags": [
			{
				"name": "index",
				"aliases": [
					"u"
				],
				"description": "update stat information for the checked out entries in\nthe index file.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "be quiet if files exist or are not in the index",
				"isString": false
			},
			{
				"name": "force",
				"aliases": [
					"f"
				],
				"description": "forces overwrite of existing files",
				"isString": false
			},
			{
				"name": "all",
				"aliases": [
					"a"
				],
				"description": "checks out all files in the index.  Cannot be used\ntogether with explicit filenames.",
				"isString": false
			},
			{
				"name": "no-create",
				"aliases": [
					"n"
				],
				"description": "Don’t checkout new files, only refresh files already checked\nout.",
				"isString": false
			},
			{
				"name": "prefix",
				"aliases": [],
				"description": "When creating files, prepend <string> (usually a directory\nincluding a trailing /)",
				"isString": false
			},
			{
				"name": "stage",
				"aliases": [],
				"description": "Instead of checking out unmerged entries, copy out the\nfiles from named stage.  <number> must be between 1 and 3.\nNote: --stage=all automatically implies --temp.",
				"isString": false
			},
			{
				"name": "temp",
				"aliases": [],
				"description": "Instead of copying the files to the working directory\nwrite the content to temporary files.  The temporary name\nassociations will be written to stdout.",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "Instead of taking list of paths from the command line,\nread list of paths from the standard input.  Paths are\nseparated by LF (i.e. one path per line) by default.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Only meaningful with --stdin; paths are separated with\nNUL character instead of LF.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			}
		]
	},
	{
		"name": "commit-tree",
		"description": "Create a new commit object",
		"flags": [
			{
				"name": "<tree>",
				"aliases": [],
				"description": "An existing tree object.",
				"isString": true
			},
			{
				"name": "",
				"aliases": [],
				"description": "Each -p indicates the id of a parent commit object.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "A paragraph in the commit log message. This can be given more than\nonce and each <message> becomes its own paragraph.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Read the commit log message from the given file. Use - to read\nfrom the standard input. This can be given more than once and the\ncontent of each file becomes its own paragraph.",
				"isString": false
			},
			{
				"name": "gpg-sign",
				"aliases": [
					"S[<keyid>]",
					"no-gpg-sign"
				],
				"description": "GPG-sign commits. The keyid argument is optional and\ndefaults to the committer identity; if specified, it must be\nstuck to the option without a space. --no-gpg-sign is useful to\ncountermand a --gpg-sign option given earlier on the command line.",
				"isString": false
			}
		]
	},
	{
		"name": "count-objects",
		"description": "Count unpacked number of objects and their disk consumption",
		"flags": [
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "Report in more detail:\n\ncount: the number of loose objects\n\n\nsize: disk space consumed by loose objects, in KiB (unless -H is specified)\n\n\nin-pack: the number of in-pack objects\n\n\nsize-pack: disk space consumed by the packs, in KiB (unless -H is specified)\n\n\nprune-packable: the number of loose objects that are also present in\nthe packs. These objects could be pruned using git prune-packed.\n\n\ngarbage: the number of files in object database that are neither valid loose\nobjects nor valid packs\n\n\nsize-garbage: disk space consumed by garbage files, in KiB (unless -H is\nspecified)\n\n\nalternate: absolute path of alternate object databases; may appear\nmultiple times, one line per path. Note that if the path contains\nnon-printable characters, it may be surrounded by double-quotes and\ncontain C-style backslashed escape sequences.",
				"isString": false
			},
			{
				"name": "human-readable",
				"aliases": [
					"H"
				],
				"description": "Print sizes in human readable format",
				"isString": false
			}
		]
	},
	{
		"name": "diff-index",
		"description": "Compare a tree to the working tree or index",
		"flags": [
			{
				"name": "patch",
				"aliases": [
					"p",
					"u"
				],
				"description": "Generate patch (see section on generating patches).",
				"isString": false
			},
			{
				"name": "no-patch",
				"aliases": [
					"s"
				],
				"description": "Suppress diff output. Useful for commands like git show that\nshow the patch by default, or to cancel the effect of --patch.",
				"isString": false
			},
			{
				"name": "unified",
				"aliases": [
					"U<n>"
				],
				"description": "Generate diffs with <n> lines of context instead of\nthe usual three.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "output",
				"aliases": [],
				"description": "Output to a specific file instead of stdout.",
				"isString": false
			},
			{
				"name": "output-indicator-context",
				"aliases": [
					"output-indicator-new=<char>",
					"output-indicator-old=<char>"
				],
				"description": "Specify the character used to indicate new, old or context\nlines in the generated patch. Normally they are +, - and\n' ' respectively.",
				"isString": false
			},
			{
				"name": "raw",
				"aliases": [],
				"description": "Generate the diff in raw format.\nThis is the default.",
				"isString": false
			},
			{
				"name": "patch-with-raw",
				"aliases": [],
				"description": "Synonym for -p --raw.",
				"isString": false
			},
			{
				"name": "indent-heuristic",
				"aliases": [],
				"description": "Enable the heuristic that shifts diff hunk boundaries to make patches\neasier to read. This is the default.",
				"isString": false
			},
			{
				"name": "no-indent-heuristic",
				"aliases": [],
				"description": "Disable the indent heuristic.",
				"isString": false
			},
			{
				"name": "minimal",
				"aliases": [],
				"description": "Spend extra time to make sure the smallest possible\ndiff is produced.",
				"isString": false
			},
			{
				"name": "patience",
				"aliases": [],
				"description": "Generate a diff using the \"patience diff\" algorithm.",
				"isString": false
			},
			{
				"name": "histogram",
				"aliases": [],
				"description": "Generate a diff using the \"histogram diff\" algorithm.",
				"isString": false
			},
			{
				"name": "anchored",
				"aliases": [],
				"description": "Generate a diff using the \"anchored diff\" algorithm.\n\nThis option may be specified more than once.\n\n\nIf a line exists in both the source and destination, exists only once,\nand starts with this text, this algorithm attempts to prevent it from\nappearing as a deletion or addition in the output. It uses the \"patience\ndiff\" algorithm internally.",
				"isString": false
			},
			{
				"name": "diff-algorithm",
				"aliases": [],
				"description": "Choose a diff algorithm. The variants are as follows:\n\n\n\n\n default, myers \n\nThe basic greedy diff algorithm. Currently, this is the default.\n\n minimal \n\nSpend extra time to make sure the smallest possible diff is\nproduced.\n\n patience \n\nUse \"patience diff\" algorithm when generating patches.\n\n histogram \n\nThis algorithm extends the patience algorithm to \"support\nlow-occurrence common elements\".\n\n\n\n\n\n\nFor instance, if you configured the diff.algorithm variable to a\nnon-default value and want to use the default one, then you\nhave to use --diff-algorithm=default option.",
				"isString": false
			},
			{
				"name": "stat",
				"aliases": [],
				"description": "Generate a diffstat. By default, as much space as necessary\nwill be used for the filename part, and the rest for the graph\npart. Maximum width defaults to terminal width, or 80 columns\nif not connected to a terminal, and can be overridden by\n<width>. The width of the filename part can be limited by\ngiving another width <name-width> after a comma. The width\nof the graph part can be limited by using\n--stat-graph-width=<width> (affects all commands generating\na stat graph) or by setting diff.statGraphWidth=<width>\n(does not affect git format-patch).\nBy giving a third parameter <count>, you can limit the\noutput to the first <count> lines, followed by ... if\nthere are more.\n\nThese parameters can also be set individually with --stat-width=<width>,\n--stat-name-width=<name-width> and --stat-count=<count>.",
				"isString": false
			},
			{
				"name": "compact-summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information such\nas file creations or deletions (\"new\" or \"gone\", optionally \"+l\"\nif it’s a symlink) and mode changes (\"+x\" or \"-x\" for adding\nor removing executable bit respectively) in diffstat. The\ninformation is put between the filename part and the graph\npart. Implies --stat.",
				"isString": false
			},
			{
				"name": "numstat",
				"aliases": [],
				"description": "Similar to --stat, but shows number of added and\ndeleted lines in decimal notation and pathname without\nabbreviation, to make it more machine friendly.  For\nbinary files, outputs two - instead of saying\n0 0.",
				"isString": false
			},
			{
				"name": "shortstat",
				"aliases": [],
				"description": "Output only the last line of the --stat format containing total\nnumber of modified files, as well as number of added and deleted\nlines.",
				"isString": false
			},
			{
				"name": "dirstat",
				"aliases": [
					"X[<param1,param2,…​>]"
				],
				"description": "Output the distribution of relative amount of changes for each\nsub-directory. The behavior of --dirstat can be customized by\npassing it a comma separated list of parameters.\nThe defaults are controlled by the diff.dirstat configuration\nvariable (see git-config[1]).\nThe following parameters are available:\n\n\n\n\n changes \n\nCompute the dirstat numbers by counting the lines that have been\nremoved from the source, or added to the destination. This ignores\nthe amount of pure code movements within a file.  In other words,\nrearranging lines in a file is not counted as much as other changes.\nThis is the default behavior when no parameter is given.\n\n lines \n\nCompute the dirstat numbers by doing the regular line-based diff\nanalysis, and summing the removed/added line counts. (For binary\nfiles, count 64-byte chunks instead, since binary files have no\nnatural concept of lines). This is a more expensive --dirstat\nbehavior than the changes behavior, but it does count rearranged\nlines within a file as much as other changes. The resulting output\nis consistent with what you get from the other --*stat options.\n\n files \n\nCompute the dirstat numbers by counting the number of files changed.\nEach changed file counts equally in the dirstat analysis. This is\nthe computationally cheapest --dirstat behavior, since it does\nnot have to look at the file contents at all.\n\n cumulative \n\nCount changes in a child directory for the parent directory as well.\nNote that when using cumulative, the sum of the percentages\nreported may exceed 100%. The default (non-cumulative) behavior can\nbe specified with the noncumulative parameter.\n\n <limit> \n\nAn integer parameter specifies a cut-off percent (3% by default).\nDirectories contributing less than this percentage of the changes\nare not shown in the output.\n\n\n\n\n\n\nExample: The following will count changed files, while ignoring\ndirectories with less than 10% of the total amount of changed files,\nand accumulating child directory counts in the parent directories:\n--dirstat=files,10,cumulative.",
				"isString": false
			},
			{
				"name": "cumulative",
				"aliases": [],
				"description": "Synonym for --dirstat=cumulative",
				"isString": false
			},
			{
				"name": "dirstat-by-file",
				"aliases": [],
				"description": "Synonym for --dirstat=files,param1,param2…​",
				"isString": false
			},
			{
				"name": "summary",
				"aliases": [],
				"description": "Output a condensed summary of extended header information\nsuch as creations, renames and mode changes.",
				"isString": false
			},
			{
				"name": "patch-with-stat",
				"aliases": [],
				"description": "Synonym for -p --stat.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When --raw, --numstat, --name-only or --name-status has been\ngiven, do not munge pathnames and use NULs as output field terminators.\n\nWithout this option, pathnames with \"unusual\" characters are quoted as\nexplained for the configuration variable core.quotePath (see\ngit-config[1]).",
				"isString": false
			},
			{
				"name": "name-only",
				"aliases": [],
				"description": "Show only names of changed files.",
				"isString": false
			},
			{
				"name": "name-status",
				"aliases": [],
				"description": "Show only names and status of changed files. See the description\nof the --diff-filter option on what the status letters mean.",
				"isString": false
			},
			{
				"name": "submodule",
				"aliases": [],
				"description": "Specify how differences in submodules are shown.  When specifying\n--submodule=short the short format is used.  This format just\nshows the names of the commits at the beginning and end of the range.\nWhen --submodule or --submodule=log is specified, the log\nformat is used.  This format lists the commits in the range like\ngit-submodule[1] summary does.  When --submodule=diff\nis specified, the diff format is used.  This format shows an\ninline diff of the changes in the submodule contents between the\ncommit range.  Defaults to diff.submodule or the short format\nif the config option is unset.",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Show colored diff.\n--color (i.e. without =<when>) is the same as --color=always.\n<when> can be one of always, never, or auto.",
				"isString": false
			},
			{
				"name": "no-color",
				"aliases": [],
				"description": "Turn off colored diff.\nIt is the same as --color=never.",
				"isString": false
			},
			{
				"name": "color-moved",
				"aliases": [],
				"description": "Moved lines of code are colored differently.\nThe <mode> defaults to no if the option is not given\nand to zebra if the option with no mode is given.\nThe mode must be one of:\n\n\n\n\n no \n\nMoved lines are not highlighted.\n\n default \n\nIs a synonym for zebra. This may change to a more sensible mode\nin the future.\n\n plain \n\nAny line that is added in one location and was removed\nin another location will be colored with color.diff.newMoved.\nSimilarly color.diff.oldMoved will be used for removed lines\nthat are added somewhere else in the diff. This mode picks up any\nmoved line, but it is not very useful in a review to determine\nif a block of code was moved without permutation.\n\n blocks \n\nBlocks of moved text of at least 20 alphanumeric characters\nare detected greedily. The detected blocks are\npainted using either the color.diff.{old,new}Moved color.\nAdjacent blocks cannot be told apart.\n\n zebra \n\nBlocks of moved text are detected as in blocks mode. The blocks\nare painted using either the color.diff.{old,new}Moved color or\ncolor.diff.{old,new}MovedAlternative. The change between\nthe two colors indicates that a new block was detected.\n\n dimmed-zebra \n\nSimilar to zebra, but additional dimming of uninteresting parts\nof moved code is performed. The bordering lines of two adjacent\nblocks are considered interesting, the rest is uninteresting.\ndimmed_zebra is a deprecated synonym.",
				"isString": false
			},
			{
				"name": "no-color-moved",
				"aliases": [],
				"description": "Turn off move detection. This can be used to override configuration\nsettings. It is the same as --color-moved=no.",
				"isString": false
			},
			{
				"name": "color-moved-ws",
				"aliases": [],
				"description": "This configures how whitespace is ignored when performing the\nmove detection for --color-moved.\nThese modes can be given as a comma separated list:\n\n\n\n\n no \n\nDo not ignore whitespace when performing move detection.\n\n ignore-space-at-eol \n\nIgnore changes in whitespace at EOL.\n\n ignore-space-change \n\nIgnore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.\n\n ignore-all-space \n\nIgnore whitespace when comparing lines. This ignores differences\neven if one line has whitespace where the other line has none.\n\n allow-indentation-change \n\nInitially ignore any whitespace in the move detection, then\ngroup the moved code blocks only into a block if the change in\nwhitespace is the same per line. This is incompatible with the\nother modes.",
				"isString": false
			},
			{
				"name": "no-color-moved-ws",
				"aliases": [],
				"description": "Do not ignore whitespace when performing move detection. This can be\nused to override configuration settings. It is the same as\n--color-moved-ws=no.",
				"isString": false
			},
			{
				"name": "word-diff",
				"aliases": [],
				"description": "Show a word diff, using the <mode> to delimit changed words.\nBy default, words are delimited by whitespace; see\n--word-diff-regex below.  The <mode> defaults to plain, and\nmust be one of:\n\n\n\n\n color \n\nHighlight changed words using only colors.  Implies --color.\n\n plain \n\nShow words as [-removed-] and {+added+}.  Makes no\nattempts to escape the delimiters if they appear in the input,\nso the output may be ambiguous.\n\n porcelain \n\nUse a special line-based format intended for script\nconsumption.  Added/removed/unchanged runs are printed in the\nusual unified diff format, starting with a +/-/` `\ncharacter at the beginning of the line and extending to the\nend of the line.  Newlines in the input are represented by a\ntilde ~ on a line of its own.\n\n none \n\nDisable word diff again.\n\n\n\n\n\n\nNote that despite the name of the first mode, color is used to\nhighlight the changed parts in all modes if enabled.",
				"isString": false
			},
			{
				"name": "word-diff-regex",
				"aliases": [],
				"description": "Use <regex> to decide what a word is, instead of considering\nruns of non-whitespace to be a word.  Also implies\n--word-diff unless it was already enabled.\n\nEvery non-overlapping match of the\n<regex> is considered a word.  Anything between these matches is\nconsidered whitespace and ignored(!) for the purposes of finding\ndifferences.  You may want to append |[^[:space:]] to your regular\nexpression to make sure that it matches all non-whitespace characters.\nA match that contains a newline is silently truncated(!) at the\nnewline.\n\n\nFor example, --word-diff-regex=. will treat each character as a word\nand, correspondingly, show differences character by character.\n\n\nThe regex can also be set via a diff driver or configuration option, see\ngitattributes[5] or git-config[1].  Giving it explicitly\noverrides any diff driver or configuration setting.  Diff drivers\noverride configuration settings.",
				"isString": false
			},
			{
				"name": "color-words",
				"aliases": [],
				"description": "Equivalent to --word-diff=color plus (if a regex was\nspecified) --word-diff-regex=<regex>.",
				"isString": false
			},
			{
				"name": "no-renames",
				"aliases": [],
				"description": "Turn off rename detection, even when the configuration\nfile gives the default to do so.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Whether to use empty blobs as rename source.",
				"isString": false
			},
			{
				"name": "check",
				"aliases": [],
				"description": "Warn if changes introduce conflict markers or whitespace errors.\nWhat are considered whitespace errors is controlled by core.whitespace\nconfiguration.  By default, trailing whitespaces (including\nlines that consist solely of whitespaces) and a space character\nthat is immediately followed by a tab character inside the\ninitial indent of the line are considered whitespace errors.\nExits with non-zero status if problems are found. Not compatible\nwith --exit-code.",
				"isString": false
			},
			{
				"name": "ws-error-highlight",
				"aliases": [],
				"description": "Highlight whitespace errors in the context, old or new\nlines of the diff.  Multiple values are separated by comma,\nnone resets previous values, default reset the list to\nnew and all is a shorthand for old,new,context.  When\nthis option is not given, and the configuration variable\ndiff.wsErrorHighlight is not set, only whitespace errors in\nnew lines are highlighted. The whitespace errors are colored\nwith color.diff.whitespace.",
				"isString": false
			},
			{
				"name": "full-index",
				"aliases": [],
				"description": "Instead of the first handful of characters, show the full\npre- and post-image blob object names on the \"index\"\nline when generating patch format output.",
				"isString": false
			},
			{
				"name": "binary",
				"aliases": [],
				"description": "In addition to --full-index, output a binary diff that\ncan be applied with git-apply.\nImplies --patch.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nname in diff-raw format output and diff-tree header\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nIn diff-patch output format, --full-index takes higher\nprecedence, i.e. if --full-index is specified, full blob\nnames will be shown regardless of --abbrev.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "break-rewrites",
				"aliases": [
					"B[<n>][/<m>]"
				],
				"description": "Break complete rewrite changes into pairs of delete and\ncreate. This serves two purposes:\n\nIt affects the way a change that amounts to a total rewrite of a file\nnot as a series of deletion and insertion mixed together with a very\nfew lines that happen to match textually as the context, but as a\nsingle deletion of everything old followed by a single insertion of\neverything new, and the number m controls this aspect of the -B\noption (defaults to 60%). -B/70% specifies that less than 30% of the\noriginal should remain in the result for Git to consider it a total\nrewrite (i.e. otherwise the resulting patch will be a series of\ndeletion and insertion mixed together with context lines).\n\n\nWhen used with -M, a totally-rewritten file is also considered as the\nsource of a rename (usually -M only considers a file that disappeared\nas the source of a rename), and the number n controls this aspect of\nthe -B option (defaults to 50%). -B20% specifies that a change with\naddition and deletion compared to 20% or more of the file’s size are\neligible for being picked up as a possible source of a rename to\nanother file.",
				"isString": false
			},
			{
				"name": "find-renames",
				"aliases": [
					"M[<n>]"
				],
				"description": "Detect renames.\nIf n is specified, it is a threshold on the similarity\nindex (i.e. amount of addition/deletions compared to the\nfile’s size). For example, -M90% means Git should consider a\ndelete/add pair to be a rename if more than 90% of the file\nhasn’t changed.  Without a % sign, the number is to be read as\na fraction, with a decimal point before it.  I.e., -M5 becomes\n0.5, and is thus the same as -M50%.  Similarly, -M05 is\nthe same as -M5%.  To limit detection to exact renames, use\n-M100%.  The default similarity index is 50%.",
				"isString": false
			},
			{
				"name": "find-copies",
				"aliases": [
					"C[<n>]"
				],
				"description": "Detect copies as well as renames.  See also --find-copies-harder.\nIf n is specified, it has the same meaning as for -M<n>.",
				"isString": false
			},
			{
				"name": "find-copies-harder",
				"aliases": [],
				"description": "For performance reasons, by default, -C option finds copies only\nif the original file of the copy was modified in the same\nchangeset.  This flag makes the command\ninspect unmodified files as candidates for the source of\ncopy.  This is a very expensive operation for large\nprojects, so use it with caution.  Giving more than one\n-C option has the same effect.",
				"isString": false
			},
			{
				"name": "irreversible-delete",
				"aliases": [
					"D"
				],
				"description": "Omit the preimage for deletes, i.e. print only the header but not\nthe diff between the preimage and /dev/null. The resulting patch\nis not meant to be applied with patch or git apply; this is\nsolely for people who want to just concentrate on reviewing the\ntext after the change. In addition, the output obviously lacks\nenough information to apply such a patch in reverse, even manually,\nhence the name of the option.\n\nWhen used together with -B, omit also the preimage in the deletion part\nof a delete/create pair.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "The -M and -C options require O(n^2) processing time where n\nis the number of potential rename/copy targets.  This\noption prevents rename/copy detection from running if\nthe number of rename/copy targets exceeds the specified\nnumber.",
				"isString": false
			},
			{
				"name": "diff-filter",
				"aliases": [],
				"description": "Select only files that are Added (A), Copied (C),\nDeleted (D), Modified (M), Renamed (R), have their\ntype (i.e. regular file, symlink, submodule, …​) changed (T),\nare Unmerged (U), are\nUnknown (X), or have had their pairing Broken (B).\nAny combination of the filter characters (including none) can be used.\nWhen * (All-or-none) is added to the combination, all\npaths are selected if there is any file that matches\nother criteria in the comparison; if there is no file\nthat matches other criteria, nothing is selected.\n\nAlso, these upper-case letters can be downcased to exclude.  E.g.\n--diff-filter=ad excludes added and deleted paths.\n\n\nNote that not all diffs can feature all types. For instance, diffs\nfrom the index to the working tree can never have Added entries\n(because the set of paths included in the diff is limited by what is in\nthe index).  Similarly, copied and renamed entries cannot appear if\ndetection for those types is disabled.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified string (i.e. addition/deletion) in a file.\nIntended for the scripter’s use.\n\nIt is useful when you’re looking for an exact block of code (like a\nstruct), and want to know the history of that block since it first\ncame into being: use the feature iteratively to feed the interesting\nblock in the preimage back into -S, and keep going until you get the\nvery first version of the block.\n\n\nBinary files are searched as well.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Look for differences whose patch text contains added/removed\nlines that match <regex>.\n\nTo illustrate the difference between -S<regex> --pickaxe-regex and\n-G<regex>, consider a commit with the following diff in the same\nfile:\n\n\n\n+    return frotz(nitfol, two->ptr, 1, 0);\n...\n-    hit = frotz(nitfol, mf2.ptr, 1, 0);\n\n\n\nWhile git log -G\"frotz\\(nitfol\" will show this commit, git log\n-S\"frotz\\(nitfol\" --pickaxe-regex will not (because the number of\noccurrences of that string did not change).\n\n\nUnless --text is supplied patches of binary files without a textconv\nfilter will be ignored.\n\n\nSee the pickaxe entry in gitdiffcore[7] for more\ninformation.",
				"isString": false
			},
			{
				"name": "find-object",
				"aliases": [],
				"description": "Look for differences that change the number of occurrences of\nthe specified object. Similar to -S, just the argument is different\nin that it doesn’t search for a specific string but for a specific\nobject id.\n\nThe object can be a blob or a submodule commit. It implies the -t option in\ngit-log to also find trees.",
				"isString": false
			},
			{
				"name": "pickaxe-all",
				"aliases": [],
				"description": "When -S or -G finds a change, show all the changes in that\nchangeset, not just the files that contain the change\nin <string>.",
				"isString": false
			},
			{
				"name": "pickaxe-regex",
				"aliases": [],
				"description": "Treat the <string> given to -S as an extended POSIX regular\nexpression to match.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Control the order in which files appear in the output.\nThis overrides the diff.orderFile configuration variable\n(see git-config[1]).  To cancel diff.orderFile,\nuse -O/dev/null.\n\nThe output order is determined by the order of glob patterns in\n<orderfile>.\nAll files with pathnames that match the first pattern are output\nfirst, all files with pathnames that match the second pattern (but not\nthe first) are output next, and so on.\nAll files with pathnames that do not match any pattern are output\nlast, as if there was an implicit match-all pattern at the end of the\nfile.\nIf multiple pathnames have the same rank (they match the same pattern\nbut no earlier patterns), their output order relative to each other is\nthe normal order.\n\n\n<orderfile> is parsed as follows:\n\n\n\n\n\n\nBlank lines are ignored, so they can be used as separators for\nreadability.\n\n\nLines starting with a hash (\"#\") are ignored, so they can be used\nfor comments.  Add a backslash (\"\\\") to the beginning of the\npattern if it starts with a hash.\n\n\nEach other line contains a single pattern.\n\n\n\n\n\n\nPatterns have the same syntax and semantics as patterns used for\nfnmatch(3) without the FNM_PATHNAME flag, except a pathname also\nmatches a pattern if removing any number of the final pathname\ncomponents matches the pattern.  For example, the pattern \"foo*bar\"\nmatches \"fooasdfbar\" and \"foo/bar/baz/asdf\" but not \"foobarx\".",
				"isString": false
			},
			{
				"name": "rotate-to",
				"aliases": [
					"skip-to=<file>"
				],
				"description": "Discard the files before the named <file> from the output\n(i.e. skip to), or move them to the end of the output\n(i.e. rotate to).  These were invented primarily for use\nof the git difftool command, and may not be very useful\notherwise.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Swap two inputs; that is, show differences from index or\non-disk file to tree contents.",
				"isString": false
			},
			{
				"name": "relative",
				"aliases": [
					"no-relative"
				],
				"description": "When run from a subdirectory of the project, it can be\ntold to exclude changes outside the directory and show\npathnames relative to it with this option.  When you are\nnot in a subdirectory (e.g. in a bare repository), you\ncan name which subdirectory to make the output relative\nto by giving a <path> as an argument.\n--no-relative can be used to countermand both diff.relative config\noption and previous --relative.",
				"isString": false
			},
			{
				"name": "text",
				"aliases": [
					"a"
				],
				"description": "Treat all files as text.",
				"isString": false
			},
			{
				"name": "ignore-cr-at-eol",
				"aliases": [],
				"description": "Ignore carriage-return at the end of line when doing a comparison.",
				"isString": false
			},
			{
				"name": "ignore-space-at-eol",
				"aliases": [],
				"description": "Ignore changes in whitespace at EOL.",
				"isString": false
			},
			{
				"name": "ignore-space-change",
				"aliases": [
					"b"
				],
				"description": "Ignore changes in amount of whitespace.  This ignores whitespace\nat line end, and considers all other sequences of one or\nmore whitespace characters to be equivalent.",
				"isString": false
			},
			{
				"name": "ignore-all-space",
				"aliases": [
					"w"
				],
				"description": "Ignore whitespace when comparing lines.  This ignores\ndifferences even if one line has whitespace where the other\nline has none.",
				"isString": false
			},
			{
				"name": "ignore-blank-lines",
				"aliases": [],
				"description": "Ignore changes whose lines are all blank.",
				"isString": false
			},
			{
				"name": "ignore-matching-lines",
				"aliases": [
					"I<regex>"
				],
				"description": "Ignore changes whose all lines match <regex>.  This option may\nbe specified more than once.",
				"isString": false
			},
			{
				"name": "inter-hunk-context",
				"aliases": [],
				"description": "Show the context between diff hunks, up to the specified number\nof lines, thereby fusing hunks that are close to each other.\nDefaults to diff.interHunkContext or 0 if the config option\nis unset.",
				"isString": false
			},
			{
				"name": "function-context",
				"aliases": [
					"W"
				],
				"description": "Show whole function as context lines for each change.\nThe function names are determined in the same way as\ngit diff works out patch hunk headers (see Defining a\ncustom hunk-header in gitattributes[5]).",
				"isString": false
			},
			{
				"name": "exit-code",
				"aliases": [],
				"description": "Make the program exit with codes similar to diff(1).\nThat is, it exits with 1 if there were differences and\n0 means no differences.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Disable all output of the program. Implies --exit-code.",
				"isString": false
			},
			{
				"name": "ext-diff",
				"aliases": [],
				"description": "Allow an external diff helper to be executed. If you set an\nexternal diff driver with gitattributes[5], you need\nto use this option with git-log[1] and friends.",
				"isString": false
			},
			{
				"name": "no-ext-diff",
				"aliases": [],
				"description": "Disallow external diff drivers.",
				"isString": false
			},
			{
				"name": "no-textconv",
				"aliases": [
					"textconv"
				],
				"description": "Allow (or disallow) external text conversion filters to be run\nwhen comparing binary files. See gitattributes[5] for\ndetails. Because textconv filters are typically a one-way\nconversion, the resulting diff is suitable for human\nconsumption, but cannot be applied. For this reason, textconv\nfilters are enabled by default only for git-diff[1] and\ngit-log[1], but not for git-format-patch[1] or\ndiff plumbing commands.",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Ignore changes to submodules in the diff generation. <when> can be\neither \"none\", \"untracked\", \"dirty\" or \"all\", which is the default.\nUsing \"none\" will consider the submodule modified when it either contains\nuntracked or modified files or its HEAD differs from the commit recorded\nin the superproject and can be used to override any settings of the\nignore option in git-config[1] or gitmodules[5]. When\n\"untracked\" is used submodules are not considered dirty when they only\ncontain untracked content (but they are still scanned for modified\ncontent). Using \"dirty\" ignores all changes to the work tree of submodules,\nonly changes to the commits stored in the superproject are shown (this was\nthe behavior until 1.7.0). Using \"all\" hides all changes to submodules.",
				"isString": false
			},
			{
				"name": "src-prefix",
				"aliases": [],
				"description": "Show the given source prefix instead of \"a/\".",
				"isString": false
			},
			{
				"name": "dst-prefix",
				"aliases": [],
				"description": "Show the given destination prefix instead of \"b/\".",
				"isString": false
			},
			{
				"name": "no-prefix",
				"aliases": [],
				"description": "Do not show any source or destination prefix.",
				"isString": false
			},
			{
				"name": "line-prefix",
				"aliases": [],
				"description": "Prepend an additional prefix to every line of output.",
				"isString": false
			},
			{
				"name": "ita-invisible-in-index",
				"aliases": [],
				"description": "By default entries added by \"git add -N\" appear as an existing\nempty file in \"git diff\" and a new file in \"git diff --cached\".\nThis option makes the entry appear as a new file in \"git diff\"\nand non-existent in \"git diff --cached\". This option could be\nreverted with --ita-visible-in-index. Both options are\nexperimental and could be removed in future.",
				"isString": false
			}
		]
	},
	{
		"name": "for-each-ref",
		"description": "Output information on each ref",
		"flags": [
			{
				"name": "<pattern>…​",
				"aliases": [],
				"description": "If one or more patterns are given, only refs are shown that\nmatch against at least one pattern, either using fnmatch(3) or\nliterally, in the latter case matching completely or from the\nbeginning up to a slash.",
				"isString": true
			},
			{
				"name": "count",
				"aliases": [],
				"description": "By default the command shows all refs that match\n<pattern>.  This option makes it stop after showing\nthat many refs.",
				"isString": false
			},
			{
				"name": "sort",
				"aliases": [],
				"description": "A field name to sort on.  Prefix - to sort in\ndescending order of the value.  When unspecified,\nrefname is used.  You may use the --sort=<key> option\nmultiple times, in which case the last key becomes the primary\nkey.",
				"isString": false
			},
			{
				"name": "format",
				"aliases": [],
				"description": "A string that interpolates %(fieldname) from a ref being shown\nand the object it points at.  If fieldname\nis prefixed with an asterisk (*) and the ref points\nat a tag object, use the value for the field in the object\nwhich the tag object refers to (instead of the field in the tag object).\nWhen unspecified, <format> defaults to\n%(objectname) SPC %(objecttype) TAB %(refname).\nIt also interpolates %% to %, and %xx where xx\nare hex digits interpolates to character with hex code\nxx; for example %00 interpolates to \\0 (NUL),\n%09 to \\t (TAB) and %0a to \\n (LF).",
				"isString": false
			},
			{
				"name": "color",
				"aliases": [],
				"description": "Respect any colors specified in the --format option. The\n<when> field must be one of always, never, or auto (if\n<when> is absent, behave as if always was given).",
				"isString": false
			},
			{
				"name": "python",
				"aliases": [
					"shell",
					"perl",
					"tcl"
				],
				"description": "If given, strings that substitute %(fieldname)\nplaceholders are quoted as string literals suitable for\nthe specified host language.  This is meant to produce\na scriptlet that can directly be `eval`ed.",
				"isString": false
			},
			{
				"name": "points-at",
				"aliases": [],
				"description": "Only list refs which points at the given object.",
				"isString": false
			},
			{
				"name": "merged",
				"aliases": [],
				"description": "Only list refs whose tips are reachable from the\nspecified commit (HEAD if not specified).",
				"isString": false
			},
			{
				"name": "no-merged",
				"aliases": [],
				"description": "Only list refs whose tips are not reachable from the\nspecified commit (HEAD if not specified).",
				"isString": false
			},
			{
				"name": "contains",
				"aliases": [],
				"description": "Only list refs which contain the specified commit (HEAD if not\nspecified).",
				"isString": false
			},
			{
				"name": "no-contains",
				"aliases": [],
				"description": "Only list refs which don’t contain the specified commit (HEAD\nif not specified).",
				"isString": false
			},
			{
				"name": "ignore-case",
				"aliases": [],
				"description": "Sorting and filtering refs are case insensitive.",
				"isString": false
			}
		]
	},
	{
		"name": "hash-object",
		"description": "Compute object ID and optionally creates a blob from a file",
		"flags": [
			{
				"name": "",
				"aliases": [],
				"description": "Specify the type (default: \"blob\").",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Actually write the object into the object database.",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "Read the object from standard input instead of from a file.",
				"isString": false
			},
			{
				"name": "stdin-paths",
				"aliases": [],
				"description": "Read file names from the standard input, one per line, instead\nof from the command-line.",
				"isString": false
			},
			{
				"name": "path",
				"aliases": [],
				"description": "Hash object as it were located at the given path. The location of\nfile does not directly influence on the hash value, but path is\nused to determine what Git filters should be applied to the object\nbefore it can be placed to the object database, and, as result of\napplying filters, the actual blob put into the object database may\ndiffer from the given file. This option is mainly useful for hashing\ntemporary files located outside of the working directory or files\nread from stdin.",
				"isString": false
			},
			{
				"name": "no-filters",
				"aliases": [],
				"description": "Hash the contents as is, ignoring any input filter that would\nhave been chosen by the attributes mechanism, including the end-of-line\nconversion. If the file is read from standard input then this\nis always implied, unless the --path option is given.",
				"isString": false
			},
			{
				"name": "literally",
				"aliases": [],
				"description": "Allow --stdin to hash any garbage into a loose object which might not\notherwise pass standard object parsing or git-fsck checks. Useful for\nstress-testing Git itself or reproducing characteristics of corrupt or\nbogus objects encountered in the wild.",
				"isString": false
			}
		]
	},
	{
		"name": "ls-files",
		"description": "Show information about files in the index and the working tree",
		"flags": [
			{
				"name": "cached",
				"aliases": [
					"c"
				],
				"description": "Show cached files in the output (default)",
				"isString": false
			},
			{
				"name": "deleted",
				"aliases": [
					"d"
				],
				"description": "Show deleted files in the output",
				"isString": false
			},
			{
				"name": "modified",
				"aliases": [
					"m"
				],
				"description": "Show modified files in the output",
				"isString": false
			},
			{
				"name": "others",
				"aliases": [
					"o"
				],
				"description": "Show other (i.e. untracked) files in the output",
				"isString": false
			},
			{
				"name": "ignored",
				"aliases": [
					"i"
				],
				"description": "Show only ignored files in the output. When showing files in the\nindex, print only those matched by an exclude pattern. When\nshowing \"other\" files, show only those matched by an exclude\npattern. Standard ignore rules are not automatically activated,\ntherefore at least one of the --exclude* options is required.",
				"isString": false
			},
			{
				"name": "stage",
				"aliases": [
					"s"
				],
				"description": "Show staged contents' mode bits, object name and stage number in the output.",
				"isString": false
			},
			{
				"name": "directory",
				"aliases": [],
				"description": "If a whole directory is classified as \"other\", show just its\nname (with a trailing slash) and not its whole contents.",
				"isString": false
			},
			{
				"name": "no-empty-directory",
				"aliases": [],
				"description": "Do not list empty directories. Has no effect without --directory.",
				"isString": false
			},
			{
				"name": "unmerged",
				"aliases": [
					"u"
				],
				"description": "Show unmerged files in the output (forces --stage)",
				"isString": false
			},
			{
				"name": "killed",
				"aliases": [
					"k"
				],
				"description": "Show files on the filesystem that need to be removed due\nto file/directory conflicts for checkout-index to\nsucceed.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "\\0 line termination on output and do not quote filenames.\nSee OUTPUT below for more information.",
				"isString": false
			},
			{
				"name": "deduplicate",
				"aliases": [],
				"description": "When only filenames are shown, suppress duplicates that may\ncome from having multiple stages during a merge, or giving\n--deleted and --modified option at the same time.\nWhen any of the -t, --unmerged, or --stage option is\nin use, this option has no effect.",
				"isString": false
			},
			{
				"name": "exclude",
				"aliases": [
					"x"
				],
				"description": "Skip untracked files matching pattern.\nNote that pattern is a shell wildcard pattern. See EXCLUDE PATTERNS\nbelow for more information.",
				"isString": false
			},
			{
				"name": "exclude-from",
				"aliases": [
					"X"
				],
				"description": "Read exclude patterns from <file>; 1 per line.",
				"isString": false
			},
			{
				"name": "exclude-per-directory",
				"aliases": [],
				"description": "Read additional exclude patterns that apply only to the\ndirectory and its subdirectories in <file>.",
				"isString": false
			},
			{
				"name": "exclude-standard",
				"aliases": [],
				"description": "Add the standard Git exclusions: .git/info/exclude, .gitignore\nin each directory, and the user’s global exclusion file.",
				"isString": false
			},
			{
				"name": "error-unmatch",
				"aliases": [],
				"description": "If any <file> does not appear in the index, treat this as an\nerror (return 1).",
				"isString": false
			},
			{
				"name": "with-tree",
				"aliases": [],
				"description": "When using --error-unmatch to expand the user supplied\n<file> (i.e. path pattern) arguments to paths, pretend\nthat paths which were removed in the index since the\nnamed <tree-ish> are still present.  Using this option\nwith -s or -u options does not make any sense.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "This feature is semi-deprecated. For scripting purpose,\ngit-status[1] --porcelain and\ngit-diff-files[1] --name-status are almost always\nsuperior alternatives, and users should look at\ngit-status[1] --short or git-diff[1]\n--name-status for more user-friendly alternatives.\n\n\n\nThis option identifies the file status with the following tags (followed by\na space) at the start of each line:\n\n\n\n H \n\ncached\n\n S \n\nskip-worktree\n\n M \n\nunmerged\n\n R \n\nremoved/deleted\n\n C \n\nmodified/changed\n\n K \n\nto be killed\n\n ? \n\nother",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Similar to -t, but use lowercase letters for files\nthat are marked as assume unchanged (see\ngit-update-index[1]).",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Similar to -t, but use lowercase letters for files\nthat are marked as fsmonitor valid (see\ngit-update-index[1]).",
				"isString": false
			},
			{
				"name": "full-name",
				"aliases": [],
				"description": "When run from a subdirectory, the command usually\noutputs paths relative to the current directory.  This\noption forces paths to be output relative to the project\ntop directory.",
				"isString": false
			},
			{
				"name": "recurse-submodules",
				"aliases": [],
				"description": "Recursively calls ls-files on each active submodule in the repository.\nCurrently there is only support for the --cached mode.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "debug",
				"aliases": [],
				"description": "After each line that describes a file, add more data about its\ncache entry.  This is intended to show as much information as\npossible for manual inspection; the exact format may change at\nany time.",
				"isString": false
			},
			{
				"name": "eol",
				"aliases": [],
				"description": "Show <eolinfo> and <eolattr> of files.\n<eolinfo> is the file content identification used by Git when\nthe \"text\" attribute is \"auto\" (or not set and core.autocrlf is not false).\n<eolinfo> is either \"-text\", \"none\", \"lf\", \"crlf\", \"mixed\" or \"\".\n\n\"\" means the file is not a regular file, it is not in the index or\nnot accessible in the working tree.\n\n\n<eolattr> is the attribute that is used when checking out or committing,\nit is either \"\", \"-text\", \"text\", \"text=auto\", \"text eol=lf\", \"text eol=crlf\".\nSince Git 2.10 \"text=auto eol=lf\" and \"text=auto eol=crlf\" are supported.\n\n\nBoth the <eolinfo> in the index (\"i/<eolinfo>\")\nand in the working tree (\"w/<eolinfo>\") are shown for regular files,\nfollowed by the  (\"attr/<eolattr>\").",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			},
			{
				"name": "<file>",
				"aliases": [],
				"description": "Files to show. If no files are given all files which match the other\nspecified criteria are shown.",
				"isString": true
			}
		]
	},
	{
		"name": "ls-tree",
		"description": "List the contents of a tree object",
		"flags": [
			{
				"name": "<tree-ish>",
				"aliases": [],
				"description": "Id of a tree-ish.",
				"isString": true
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show only the named tree entry itself, not its children.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Recurse into sub-trees.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show tree entries even when going to recurse them. Has no effect\nif -r was not passed. -d implies -t.",
				"isString": false
			},
			{
				"name": "long",
				"aliases": [
					"l"
				],
				"description": "Show object size of blob (file) entries.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "\\0 line termination on output and do not quote filenames.\nSee OUTPUT FORMAT below for more information.",
				"isString": false
			},
			{
				"name": "name-status",
				"aliases": [
					"name-only"
				],
				"description": "List only filenames (instead of the \"long\" output), one per line.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Instead of showing the full 40-byte hexadecimal object\nlines, show the shortest prefix that is at least <n>\nhexdigits long that uniquely refers the object.\nNon default number of digits can be specified with --abbrev=<n>.",
				"isString": false
			},
			{
				"name": "full-name",
				"aliases": [],
				"description": "Instead of showing the path names relative to the current working\ndirectory, show the full path names.",
				"isString": false
			},
			{
				"name": "full-tree",
				"aliases": [],
				"description": "Do not limit the listing to the current working directory.\nImplies --full-name.",
				"isString": false
			},
			{
				"name": "[<path>…​]",
				"aliases": [],
				"description": "When paths are given, show them (note that this isn’t really raw\npathnames, but rather a list of patterns to match).  Otherwise\nimplicitly uses the root level of the tree as the sole path argument.",
				"isString": true
			}
		]
	},
	{
		"name": "merge-base",
		"description": "Find as good common ancestors as possible for a merge",
		"flags": [
			{
				"name": "all",
				"aliases": [
					"a"
				],
				"description": "Output all merge bases for the commits, instead of just one.",
				"isString": false
			}
		]
	},
	{
		"name": "read-tree",
		"description": "Reads tree information into the index",
		"flags": [
			{
				"name": "",
				"aliases": [],
				"description": "Perform a merge, not just a read.  The command will\nrefuse to run if your index file has unmerged entries,\nindicating that you have not finished previous merge you\nstarted.",
				"isString": false
			},
			{
				"name": "reset",
				"aliases": [],
				"description": "Same as -m, except that unmerged entries are discarded instead\nof failing. When used with -u, updates leading to loss of\nworking tree changes will not abort the operation.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "After a successful merge, update the files in the work\ntree with the result of the merge.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Usually a merge requires the index file as well as the\nfiles in the working tree to be up to date with the\ncurrent head commit, in order not to lose local\nchanges.  This flag disables the check with the working\ntree and is meant to be used when creating a merge of\ntrees that are not directly related to the current\nworking tree status into a temporary index file.",
				"isString": false
			},
			{
				"name": "dry-run",
				"aliases": [
					"n"
				],
				"description": "Check if the command would error out, without updating the index\nor the files in the working tree for real.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Show the progress of checking files out.",
				"isString": false
			},
			{
				"name": "trivial",
				"aliases": [],
				"description": "Restrict three-way merge by git read-tree to happen\nonly if there is no file-level merging required, instead\nof resolving merge for trivial cases and leaving\nconflicting files unresolved in the index.",
				"isString": false
			},
			{
				"name": "aggressive",
				"aliases": [],
				"description": "Usually a three-way merge by git read-tree resolves\nthe merge for really trivial cases and leaves other\ncases unresolved in the index, so that porcelains can\nimplement different merge policies.  This flag makes the\ncommand resolve a few more cases internally:\n\n\n\nwhen one side removes a path and the other side leaves the path\nunmodified.  The resolution is to remove that path.\n\n\nwhen both sides remove a path.  The resolution is to remove that path.\n\n\nwhen both sides add a path identically.  The resolution\nis to add that path.",
				"isString": false
			},
			{
				"name": "prefix",
				"aliases": [],
				"description": "Keep the current index contents, and read the contents\nof the named tree-ish under the directory at <prefix>.\nThe command will refuse to overwrite entries that already\nexisted in the original index file.",
				"isString": false
			},
			{
				"name": "exclude-per-directory",
				"aliases": [],
				"description": "When running the command with -u and -m options, the\nmerge result may need to overwrite paths that are not\ntracked in the current branch.  The command usually\nrefuses to proceed with the merge to avoid losing such a\npath.  However this safety valve sometimes gets in the\nway.  For example, it often happens that the other\nbranch added a file that used to be a generated file in\nyour branch, and the safety valve triggers when you try\nto switch to that branch after you ran make but before\nrunning make clean to remove the generated file.  This\noption tells the command to read per-directory exclude\nfile (usually .gitignore) and allows such an untracked\nbut explicitly ignored file to be overwritten.",
				"isString": false
			},
			{
				"name": "index-output",
				"aliases": [],
				"description": "Instead of writing the results out to $GIT_INDEX_FILE,\nwrite the resulting index in the named file.  While the\ncommand is operating, the original index file is locked\nwith the same mechanism as usual.  The file must allow\nto be rename(2)ed into from a temporary file that is\ncreated next to the usual index file; typically this\nmeans it needs to be on the same filesystem as the index\nfile itself, and you need write permission to the\ndirectories the index file and index output file are\nlocated in.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Using --recurse-submodules will update the content of all active\nsubmodules according to the commit recorded in the superproject by\ncalling read-tree recursively, also setting the submodules' HEAD to be\ndetached at that commit.",
				"isString": false
			},
			{
				"name": "no-sparse-checkout",
				"aliases": [],
				"description": "Disable sparse checkout support even if core.sparseCheckout\nis true.",
				"isString": false
			},
			{
				"name": "empty",
				"aliases": [],
				"description": "Instead of reading tree object(s) into the index, just empty\nit.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Quiet, suppress feedback messages.",
				"isString": false
			},
			{
				"name": "<tree-ish#>",
				"aliases": [],
				"description": "The id of the tree object(s) to be read/merged.",
				"isString": true
			}
		]
	},
	{
		"name": "rev-list",
		"description": "Lists commit objects in reverse chronological order",
		"flags": [
			{
				"name": "max-count",
				"aliases": [
					"<number>",
					"n"
				],
				"description": "Limit the number of commits to output.",
				"isString": false
			},
			{
				"name": "skip",
				"aliases": [],
				"description": "Skip number commits before starting to show the commit output.",
				"isString": false
			},
			{
				"name": "since",
				"aliases": [
					"after=<date>"
				],
				"description": "Show commits more recent than a specific date.",
				"isString": false
			},
			{
				"name": "before",
				"aliases": [
					"until=<date>"
				],
				"description": "Show commits older than a specific date.",
				"isString": false
			},
			{
				"name": "max-age",
				"aliases": [
					"min-age=<timestamp>"
				],
				"description": "Limit the commits output to specified time range.",
				"isString": false
			},
			{
				"name": "committer",
				"aliases": [
					"author=<pattern>"
				],
				"description": "Limit the commits output to ones with author/committer\nheader lines that match the specified pattern (regular\nexpression).  With more than one --author=<pattern>,\ncommits whose author matches any of the given patterns are\nchosen (similarly for multiple --committer=<pattern>).",
				"isString": false
			},
			{
				"name": "grep-reflog",
				"aliases": [],
				"description": "Limit the commits output to ones with reflog entries that\nmatch the specified pattern (regular expression). With\nmore than one --grep-reflog, commits whose reflog message\nmatches any of the given patterns are chosen.  It is an\nerror to use this option unless --walk-reflogs is in use.",
				"isString": false
			},
			{
				"name": "grep",
				"aliases": [],
				"description": "Limit the commits output to ones with log message that\nmatches the specified pattern (regular expression).  With\nmore than one --grep=<pattern>, commits whose message\nmatches any of the given patterns are chosen (but see\n--all-match).",
				"isString": false
			},
			{
				"name": "all-match",
				"aliases": [],
				"description": "Limit the commits output to ones that match all given --grep,\ninstead of ones that match at least one.",
				"isString": false
			},
			{
				"name": "invert-grep",
				"aliases": [],
				"description": "Limit the commits output to ones with log message that do not\nmatch the pattern specified with --grep=<pattern>.",
				"isString": false
			},
			{
				"name": "regexp-ignore-case",
				"aliases": [
					"i"
				],
				"description": "Match the regular expression limiting patterns without regard to letter\ncase.",
				"isString": false
			},
			{
				"name": "basic-regexp",
				"aliases": [],
				"description": "Consider the limiting patterns to be basic regular expressions;\nthis is the default.",
				"isString": false
			},
			{
				"name": "extended-regexp",
				"aliases": [
					"E"
				],
				"description": "Consider the limiting patterns to be extended regular expressions\ninstead of the default basic regular expressions.",
				"isString": false
			},
			{
				"name": "fixed-strings",
				"aliases": [
					"F"
				],
				"description": "Consider the limiting patterns to be fixed strings (don’t interpret\npattern as a regular expression).",
				"isString": false
			},
			{
				"name": "perl-regexp",
				"aliases": [
					"P"
				],
				"description": "Consider the limiting patterns to be Perl-compatible regular\nexpressions.\n\nSupport for these types of regular expressions is an optional\ncompile-time dependency. If Git wasn’t compiled with support for them\nproviding this option will cause it to die.",
				"isString": false
			},
			{
				"name": "remove-empty",
				"aliases": [],
				"description": "Stop when a given path disappears from the tree.",
				"isString": false
			},
			{
				"name": "merges",
				"aliases": [],
				"description": "Print only merge commits. This is exactly the same as --min-parents=2.",
				"isString": false
			},
			{
				"name": "no-merges",
				"aliases": [],
				"description": "Do not print commits with more than one parent. This is\nexactly the same as --max-parents=1.",
				"isString": false
			},
			{
				"name": "min-parents",
				"aliases": [
					"max-parents=<number>",
					"no-min-parents",
					"no-max-parents"
				],
				"description": "Show only commits which have at least (or at most) that many parent\ncommits. In particular, --max-parents=1 is the same as --no-merges,\n--min-parents=2 is the same as --merges.  --max-parents=0\ngives all root commits and --min-parents=3 all octopus merges.\n\n--no-min-parents and --no-max-parents reset these limits (to no limit)\nagain.  Equivalent forms are --min-parents=0 (any commit has 0 or more\nparents) and --max-parents=-1 (negative numbers denote no upper limit).",
				"isString": false
			},
			{
				"name": "first-parent",
				"aliases": [],
				"description": "Follow only the first parent commit upon seeing a merge\ncommit.  This option can give a better overview when\nviewing the evolution of a particular topic branch,\nbecause merges into a topic branch tend to be only about\nadjusting to updated upstream from time to time, and\nthis option allows you to ignore the individual commits\nbrought in to your history by such a merge.",
				"isString": false
			},
			{
				"name": "not",
				"aliases": [],
				"description": "Reverses the meaning of the ^ prefix (or lack thereof)\nfor all following revision specifiers, up to the next --not.",
				"isString": false
			},
			{
				"name": "all",
				"aliases": [],
				"description": "Pretend as if all the refs in refs/, along with HEAD, are\nlisted on the command line as <commit>.",
				"isString": false
			},
			{
				"name": "branches",
				"aliases": [],
				"description": "Pretend as if all the refs in refs/heads are listed\non the command line as <commit>. If <pattern> is given, limit\nbranches to ones matching given shell glob. If pattern lacks ?,\n*, or [, /* at the end is implied.",
				"isString": false
			},
			{
				"name": "tags",
				"aliases": [],
				"description": "Pretend as if all the refs in refs/tags are listed\non the command line as <commit>. If <pattern> is given, limit\ntags to ones matching given shell glob. If pattern lacks ?, *,\nor [, /* at the end is implied.",
				"isString": false
			},
			{
				"name": "remotes",
				"aliases": [],
				"description": "Pretend as if all the refs in refs/remotes are listed\non the command line as <commit>. If <pattern> is given, limit\nremote-tracking branches to ones matching given shell glob.\nIf pattern lacks ?, *, or [, /* at the end is implied.",
				"isString": false
			},
			{
				"name": "glob",
				"aliases": [],
				"description": "Pretend as if all the refs matching shell glob <glob-pattern>\nare listed on the command line as <commit>. Leading refs/,\nis automatically prepended if missing. If pattern lacks ?, *,\nor [, /* at the end is implied.",
				"isString": false
			},
			{
				"name": "exclude",
				"aliases": [],
				"description": "Do not include refs matching <glob-pattern> that the next --all,\n--branches, --tags, --remotes, or --glob would otherwise\nconsider. Repetitions of this option accumulate exclusion patterns\nup to the next --all, --branches, --tags, --remotes, or\n--glob option (other options or arguments do not clear\naccumulated patterns).\n\nThe patterns given should not begin with refs/heads, refs/tags, or\nrefs/remotes when applied to --branches, --tags, or --remotes,\nrespectively, and they must begin with refs/ when applied to --glob\nor --all. If a trailing /* is intended, it must be given\nexplicitly.",
				"isString": false
			},
			{
				"name": "reflog",
				"aliases": [],
				"description": "Pretend as if all objects mentioned by reflogs are listed on the\ncommand line as <commit>.",
				"isString": false
			},
			{
				"name": "alternate-refs",
				"aliases": [],
				"description": "Pretend as if all objects mentioned as ref tips of alternate\nrepositories were listed on the command line. An alternate\nrepository is any repository whose object directory is specified\nin objects/info/alternates.  The set of included objects may\nbe modified by core.alternateRefsCommand, etc. See\ngit-config[1].",
				"isString": false
			},
			{
				"name": "single-worktree",
				"aliases": [],
				"description": "By default, all working trees will be examined by the\nfollowing options when there are more than one (see\ngit-worktree[1]): --all, --reflog and\n--indexed-objects.\nThis option forces them to examine the current working tree\nonly.",
				"isString": false
			},
			{
				"name": "ignore-missing",
				"aliases": [],
				"description": "Upon seeing an invalid object name in the input, pretend as if\nthe bad input was not given.",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "In addition to the <commit> listed on the command\nline, read them from the standard input. If a -- separator is\nseen, stop reading commits and start reading paths to limit the\nresult.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [],
				"description": "Don’t print anything to standard output.  This form\nis primarily meant to allow the caller to\ntest the exit status to see if a range of objects is fully\nconnected (or not).  It is faster than redirecting stdout\nto /dev/null as the output does not have to be formatted.",
				"isString": false
			},
			{
				"name": "disk-usage",
				"aliases": [],
				"description": "Suppress normal output; instead, print the sum of the bytes used\nfor on-disk storage by the selected commits or objects. This is\nequivalent to piping the output into git cat-file\n--batch-check='%(objectsize:disk)', except that it runs much\nfaster (especially with --use-bitmap-index). See the CAVEATS\nsection in git-cat-file[1] for the limitations of what\n\"on-disk storage\" means.",
				"isString": false
			},
			{
				"name": "cherry-mark",
				"aliases": [],
				"description": "Like --cherry-pick (see below) but mark equivalent commits\nwith = rather than omitting them, and inequivalent ones with +.",
				"isString": false
			},
			{
				"name": "cherry-pick",
				"aliases": [],
				"description": "Omit any commit that introduces the same change as\nanother commit on the “other side” when the set of\ncommits are limited with symmetric difference.\n\nFor example, if you have two branches, A and B, a usual way\nto list all commits on only one side of them is with\n--left-right (see the example below in the description of\nthe --left-right option). However, it shows the commits that were\ncherry-picked from the other branch (for example, “3rd on b” may be\ncherry-picked from branch A). With this option, such pairs of commits are\nexcluded from the output.",
				"isString": false
			},
			{
				"name": "right-only",
				"aliases": [
					"left-only"
				],
				"description": "List only commits on the respective side of a symmetric difference,\ni.e. only those which would be marked < resp. > by\n--left-right.\n\nFor example, --cherry-pick --right-only A...B omits those\ncommits from B which are in A or are patch-equivalent to a commit in\nA. In other words, this lists the + commits from git cherry A B.\nMore precisely, --cherry-pick --right-only --no-merges gives the exact\nlist.",
				"isString": false
			},
			{
				"name": "cherry",
				"aliases": [],
				"description": "A synonym for --right-only --cherry-mark --no-merges; useful to\nlimit the output to the commits on our side and mark those that\nhave been applied to the other side of a forked history with\ngit log --cherry upstream...mybranch, similar to\ngit cherry upstream mybranch.",
				"isString": false
			},
			{
				"name": "walk-reflogs",
				"aliases": [
					"g"
				],
				"description": "Instead of walking the commit ancestry chain, walk\nreflog entries from the most recent one to older ones.\nWhen this option is used you cannot specify commits to\nexclude (that is, ^commit, commit1..commit2,\nand commit1...commit2 notations cannot be used).\n\nWith --pretty format other than oneline and reference (for obvious reasons),\nthis causes the output to have two extra lines of information\ntaken from the reflog.  The reflog designator in the output may be shown\nas ref@{Nth} (where Nth is the reverse-chronological index in the\nreflog) or as ref@{timestamp} (with the timestamp for that entry),\ndepending on a few rules:\n\n\n\n\n\n\nIf the starting point is specified as ref@{Nth}, show the index\nformat.\n\n\nIf the starting point was specified as ref@{now}, show the\ntimestamp format.\n\n\nIf neither was used, but --date was given on the command line, show\nthe timestamp in the format requested by --date.\n\n\nOtherwise, show the index format.\n\n\n\n\n\n\nUnder --pretty=oneline, the commit message is\nprefixed with this information on the same line.\nThis option cannot be combined with --reverse.\nSee also git-reflog[1].\n\n\nUnder --pretty=reference, this information will not be shown at all.",
				"isString": false
			},
			{
				"name": "merge",
				"aliases": [],
				"description": "After a failed merge, show refs that touch files having a\nconflict and don’t exist on all heads to merge.",
				"isString": false
			},
			{
				"name": "boundary",
				"aliases": [],
				"description": "Output excluded boundary commits. Boundary commits are\nprefixed with -.",
				"isString": false
			},
			{
				"name": "use-bitmap-index",
				"aliases": [],
				"description": "Try to speed up the traversal using the pack bitmap index (if\none is available). Note that when traversing with --objects,\ntrees and blobs will not have their associated path printed.",
				"isString": false
			},
			{
				"name": "progress",
				"aliases": [],
				"description": "Show progress reports on stderr as objects are considered. The\n<header> text will be printed with each progress update.",
				"isString": false
			}
		]
	},
	{
		"name": "rev-parse",
		"description": "Pick out and massage parameters",
		"flags": [
			{
				"name": "parseopt",
				"aliases": [],
				"description": "Use git rev-parse in option parsing mode (see PARSEOPT section below).",
				"isString": false
			},
			{
				"name": "sq-quote",
				"aliases": [],
				"description": "Use git rev-parse in shell quoting mode (see SQ-QUOTE\nsection below). In contrast to the --sq option below, this\nmode does only quoting. Nothing else is done to command input.",
				"isString": false
			}
		]
	},
	{
		"name": "show-ref",
		"description": "List references in a local repository",
		"flags": [
			{
				"name": "head",
				"aliases": [],
				"description": "Show the HEAD reference, even if it would normally be filtered out.",
				"isString": false
			},
			{
				"name": "heads",
				"aliases": [
					"tags"
				],
				"description": "Limit to \"refs/heads\" and \"refs/tags\", respectively.  These options\nare not mutually exclusive; when given both, references stored in\n\"refs/heads\" and \"refs/tags\" are displayed.",
				"isString": false
			},
			{
				"name": "dereference",
				"aliases": [
					"d"
				],
				"description": "Dereference tags into object IDs as well. They will be shown with \"^{}\"\nappended.",
				"isString": false
			},
			{
				"name": "hash",
				"aliases": [
					"s"
				],
				"description": "Only show the SHA-1 hash, not the reference name. When combined with\n--dereference the dereferenced tag will still be shown after the SHA-1.",
				"isString": false
			},
			{
				"name": "verify",
				"aliases": [],
				"description": "Enable stricter reference checking by requiring an exact ref path.\nAside from returning an error code of 1, it will also print an error\nmessage if --quiet was not specified.",
				"isString": false
			},
			{
				"name": "abbrev",
				"aliases": [],
				"description": "Abbreviate the object name.  When using --hash, you do\nnot have to say --hash --abbrev; --hash=n would do.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Do not print any results to stdout. When combined with --verify this\ncan be used to silently check if a reference exists.",
				"isString": false
			},
			{
				"name": "exclude-existing",
				"aliases": [],
				"description": "Make git show-ref act as a filter that reads refs from stdin of the\nform \"^(?:<anything>\\s)?<refname>(?:\\^{})?$\"\nand performs the following actions on each:\n(1) strip \"^{}\" at the end of line if any;\n(2) ignore if pattern is provided and does not head-match refname;\n(3) warn if refname is not a well-formed refname and skip;\n(4) ignore if refname is a ref that exists in the local repository;\n(5) otherwise output the line.",
				"isString": false
			},
			{
				"name": "<pattern>…​",
				"aliases": [],
				"description": "Show references matching one or more patterns. Patterns are matched from\nthe end of the full name, and only complete parts are matched, e.g.\nmaster matches refs/heads/master, refs/remotes/origin/master,\nrefs/tags/jedi/master but not refs/heads/mymaster or\nrefs/remotes/master/jedi.",
				"isString": true
			}
		]
	},
	{
		"name": "symbolic-ref",
		"description": "Read, modify and delete symbolic refs",
		"flags": [
			{
				"name": "delete",
				"aliases": [
					"d"
				],
				"description": "Delete the symbolic ref <name>.",
				"isString": false
			},
			{
				"name": "quiet",
				"aliases": [
					"q"
				],
				"description": "Do not issue an error message if the <name> is not a\nsymbolic ref but a detached HEAD; instead exit with\nnon-zero status silently.",
				"isString": false
			},
			{
				"name": "short",
				"aliases": [],
				"description": "When showing the value of <name> as a symbolic ref, try to shorten the\nvalue, e.g. from refs/heads/master to master.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Update the reflog for <name> with <reason>.  This is valid only\nwhen creating or updating a symbolic ref.",
				"isString": false
			}
		]
	},
	{
		"name": "update-index",
		"description": "Register file contents in the working tree to the index",
		"flags": [
			{
				"name": "add",
				"aliases": [],
				"description": "If a specified file isn’t in the index already then it’s\nadded.\nDefault behaviour is to ignore new files.",
				"isString": false
			},
			{
				"name": "remove",
				"aliases": [],
				"description": "If a specified file is in the index but is missing then it’s\nremoved.\nDefault behavior is to ignore removed file.",
				"isString": false
			},
			{
				"name": "refresh",
				"aliases": [],
				"description": "Looks at the current index and checks to see if merges or\nupdates are needed by checking stat() information.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Quiet.  If --refresh finds that the index needs an update, the\n       default behavior is to error out.  This option makes\ngit update-index continue anyway.",
				"isString": false
			},
			{
				"name": "ignore-submodules",
				"aliases": [],
				"description": "Do not try to update submodules.  This option is only respected\nwhen passed before --refresh.",
				"isString": false
			},
			{
				"name": "unmerged",
				"aliases": [],
				"description": "If --refresh finds unmerged changes in the index, the default\nbehavior is to error out.  This option makes git update-index\n       continue anyway.",
				"isString": false
			},
			{
				"name": "ignore-missing",
				"aliases": [],
				"description": "Ignores missing files during a --refresh",
				"isString": false
			},
			{
				"name": "cacheinfo",
				"aliases": [
					"cacheinfo"
				],
				"description": "Directly insert the specified info into the index.  For\nbackward compatibility, you can also give these three\narguments as three separate parameters, but new users are\nencouraged to use a single-parameter form.",
				"isString": false
			},
			{
				"name": "index-info",
				"aliases": [],
				"description": "Read index information from stdin.",
				"isString": false
			},
			{
				"name": "chmod",
				"aliases": [],
				"description": "Set the execute permissions on the updated files.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When this flag is specified, the object names recorded\nfor the paths are not updated.  Instead, this option\nsets/unsets the \"assume unchanged\" bit for the\npaths.  When the \"assume unchanged\" bit is on, the user\npromises not to change the file and allows Git to assume\nthat the working tree file matches what is recorded in\nthe index.  If you want to change the working tree file,\nyou need to unset the bit to tell Git.  This is\nsometimes helpful when working with a big project on a\nfilesystem that has very slow lstat(2) system call\n(e.g. cifs).\n\nGit will fail (gracefully) in case it needs to modify this file\nin the index e.g. when merging in a commit;\nthus, in case the assumed-untracked file is changed upstream,\nyou will need to handle the situation manually.",
				"isString": false
			},
			{
				"name": "really-refresh",
				"aliases": [],
				"description": "Like --refresh, but checks stat information unconditionally,\nwithout regard to the \"assume unchanged\" setting.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When one of these flags is specified, the object name recorded\nfor the paths are not updated. Instead, these options\nset and unset the \"skip-worktree\" bit for the paths. See\nsection \"Skip-worktree bit\" below for more information.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not remove skip-worktree (AKA \"index-only\") entries even when\nthe --remove option was specified.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "When one of these flags is specified, the object name recorded\nfor the paths are not updated. Instead, these options\nset and unset the \"fsmonitor valid\" bit for the paths. See\nsection \"File System Monitor\" below for more information.",
				"isString": false
			},
			{
				"name": "again",
				"aliases": [
					"g"
				],
				"description": "Runs git update-index itself on the paths whose index\nentries are different from those from the HEAD commit.",
				"isString": false
			},
			{
				"name": "unresolve",
				"aliases": [],
				"description": "Restores the unmerged or needs updating state of a\nfile during a merge if it was cleared by accident.",
				"isString": false
			},
			{
				"name": "info-only",
				"aliases": [],
				"description": "Do not create objects in the object database for all\n<file> arguments that follow this flag; just insert\ntheir object IDs into the index.",
				"isString": false
			},
			{
				"name": "force-remove",
				"aliases": [],
				"description": "Remove the file from the index even when the working directory\nstill has such a file. (Implies --remove.)",
				"isString": false
			},
			{
				"name": "replace",
				"aliases": [],
				"description": "By default, when a file path exists in the index,\ngit update-index refuses an attempt to add path/file.\nSimilarly if a file path/file exists, a file path\ncannot be added.  With --replace flag, existing entries\nthat conflict with the entry being added are\nautomatically removed with warning messages.",
				"isString": false
			},
			{
				"name": "stdin",
				"aliases": [],
				"description": "Instead of taking list of paths from the command line,\nread list of paths from the standard input.  Paths are\nseparated by LF (i.e. one path per line) by default.",
				"isString": false
			},
			{
				"name": "verbose",
				"aliases": [],
				"description": "Report what is being added and removed from index.",
				"isString": false
			},
			{
				"name": "index-version",
				"aliases": [],
				"description": "Write the resulting index out in the named on-disk format version.\nSupported versions are 2, 3 and 4. The current default version is 2\nor 3, depending on whether extra features are used, such as\ngit add -N.\n\nVersion 4 performs a simple pathname compression that reduces index\nsize by 30%-50% on large repositories, which results in faster load\ntime. Version 4 is relatively young (first released in 1.8.0 in\nOctober 2012). Other Git implementations such as JGit and libgit2\nmay not support it yet.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Only meaningful with --stdin or --index-info; paths are\nseparated with NUL character instead of LF.",
				"isString": false
			},
			{
				"name": "no-split-index",
				"aliases": [
					"split-index"
				],
				"description": "Enable or disable split index mode. If split-index mode is\nalready enabled and --split-index is given again, all\nchanges in $GIT_DIR/index are pushed back to the shared index\nfile.\n\nThese options take effect whatever the value of the core.splitIndex\nconfiguration variable (see git-config[1]). But a warning is\nemitted when the change goes against the configured value, as the\nconfigured value will take effect next time the index is read and this\nwill remove the intended effect of the option.",
				"isString": false
			},
			{
				"name": "no-untracked-cache",
				"aliases": [
					"untracked-cache"
				],
				"description": "Enable or disable untracked cache feature. Please use\n--test-untracked-cache before enabling it.\n\nThese options take effect whatever the value of the core.untrackedCache\nconfiguration variable (see git-config[1]). But a warning is\nemitted when the change goes against the configured value, as the\nconfigured value will take effect next time the index is read and this\nwill remove the intended effect of the option.",
				"isString": false
			},
			{
				"name": "test-untracked-cache",
				"aliases": [],
				"description": "Only perform tests on the working directory to make sure\nuntracked cache can be used. You have to manually enable\nuntracked cache using --untracked-cache or\n--force-untracked-cache or the core.untrackedCache\nconfiguration variable afterwards if you really want to use\nit. If a test fails the exit code is 1 and a message\nexplains what is not working as needed, otherwise the exit\ncode is 0 and OK is printed.",
				"isString": false
			},
			{
				"name": "force-untracked-cache",
				"aliases": [],
				"description": "Same as --untracked-cache. Provided for backwards\ncompatibility with older versions of Git where\n--untracked-cache used to imply --test-untracked-cache but\nthis option would enable the extension unconditionally.",
				"isString": false
			},
			{
				"name": "no-fsmonitor",
				"aliases": [
					"fsmonitor"
				],
				"description": "Enable or disable files system monitor feature. These options\ntake effect whatever the value of the core.fsmonitor\nconfiguration variable (see git-config[1]). But a warning\nis emitted when the change goes against the configured value, as\nthe configured value will take effect next time the index is\nread and this will remove the intended effect of the option.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			},
			{
				"name": "<file>",
				"aliases": [],
				"description": "Files to act on.\nNote that files beginning with . are discarded. This includes\n./file and dir/./file. If you don’t want this, then use\ncleaner names.\nThe same applies to directories ending / and paths with //",
				"isString": true
			}
		]
	},
	{
		"name": "verify-pack",
		"description": "Validate packed Git archive files",
		"flags": [
			{
				"name": "<pack>.idx …​",
				"aliases": [],
				"description": "The idx files to verify.",
				"isString": true
			},
			{
				"name": "verbose",
				"aliases": [
					"v"
				],
				"description": "After verifying the pack, show list of objects contained\nin the pack and a histogram of delta chain length.",
				"isString": false
			},
			{
				"name": "stat-only",
				"aliases": [
					"s"
				],
				"description": "Do not verify the pack contents; only show the histogram of delta\nchain length.  With --verbose, list of objects is also shown.",
				"isString": false
			},
			{
				"name": "",
				"aliases": [],
				"description": "Do not interpret any more arguments as options.",
				"isString": false
			}
		]
	},
	{
		"name": "write-tree",
		"description": "Create a tree object from the current index",
		"flags": [
			{
				"name": "missing-ok",
				"aliases": [],
				"description": "Normally git write-tree ensures that the objects referenced by the\ndirectory exist in the object database.  This option disables this\ncheck.",
				"isString": false
			},
			{
				"name": "prefix",
				"aliases": [],
				"description": "Writes a tree object that represents a subdirectory\n<prefix>.  This can be used to write the tree object\nfor a subproject that is in the named subdirectory.",
				"isString": false
			}
		]
	}
] 
}

const specialTokens = {
  '.': 'all files in the current directory',
  '..': 'all files in the previous directory',
}

export { gitCommands, specialTokens }

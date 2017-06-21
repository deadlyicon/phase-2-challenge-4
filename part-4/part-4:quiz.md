When you run a command in the terminal, where does BASH look for that command?
history

On a UNIX computer, how do you stop a running process?
Type "ps - aux" at the terminal prompt.

What packages do you have installed via homebrew?
brew cask list can check what packages are installed

On a UNIX computer, how do you find the process id of a running process?
ps -ef | grep [f]oo

In a terminal, what does control-c do?
Ctrl + C is used to kill a process with signal SIGINT , by other words it is a polite kill .

In a terminal, what does control-a do?
Ctrl + A: Move cursor to the beginning of the line

In a terminal, what does control-e do?
Ctrl + E: Move cursor to the end of the line

What keyboard shortcut do you use to split the screen in your editor?
 cmd / ctrl + k then cmd / ctrl + w

What keyboard shortcut do you use to split the screen in your terminal?
To split vertically: ctrla then |.
To split horizontally: ctrla then S (uppercase 's').

When a terminal command completes, how can you tell if it was successful or not?
you won't see a failure message

What does your ~/.gitconfig have in it? (paste the whole file here)
[user]
	name = Pavan Kumar Sunkara
	email = pavan.sss1991@gmail.com
[core]
	editor = vim
	whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
	excludesfile = ~/.gitignore
[sendemail]
	smtpencryption = tls
	smtpserver = smtp.gmail.com
	smtpuser = pavan.sss1991@gmail.com
	smtppass = password
	smtpserverport = 587
[web]
	browser = google-chrome
[instaweb]
	httpd = apache2 -f
[rerere]
	enabled = 1
	autoupdate = 1
[push]
	default = matching
[color]
	ui = auto
[color "branch"]
	current = yellow bold
	local = green bold
	remote = cyan bold
[color "diff"]
	meta = yellow bold
	frag = magenta bold
	old = red bold
	new = green bold
	whitespace = red reverse
[color "status"]
	added = green bold
	changed = yellow bold
	untracked = red bold
[diff]
	tool = vimdiff
[difftool]
	prompt = false
[github]
	user = pkumar
	token = token
[gitflow "prefix"]
	feature = feature-
	release = release-
	hotfix = hotfix-
	support = support-
	versiontag = v
[alias]
	a = add --all
	ai = add -i
	#############
	ap = apply
	as = apply --stat
	ac = apply --check
	#############
	ama = am --abort
	amr = am --resolved
	ams = am --skip
	#############
	b = branch
	ba = branch -a
	bd = branch -d
	br = branch -r
	bdd = branch -D
	#############
	c = commit
	ca = commit -a
	cm = commit -m
	cem = commit --allow-empty -m
	cam = commit -am
	cd = commit --amend
	cad = commit -a --amend
	ced = commit --allow-empty --amend
	#############
	cp = cherry-pick
	cpa = cherry-pick --abort
	cpc = cherry-pick --continue
	#############
	d = diff
	dc = diff --cached
	dl = difftool
	dlc = difftool --cached
	dk = diff --check
	dp = diff --patience
	dck = diff --cached --check
	#############
	f = fetch
	fo = fetch origin
	fu = fetch upstream
	#############
	fp = format-patch
	#############
	fk = fsck
	#############
	g = grep -p
	#############
	l = log --oneline
	lg = log --oneline --graph --decorate
	#############
	ls = ls-files
	lsf = "!git ls-files | grep -i"
	#############
	m = merge
	ma = merge --abort
	mc = merge --continue
	ms = merge --skip
	#############
	o = checkout
	ob = checkout -b
	#############
	pr = prune -v
	#############
	ps = push
	psf = push -f
	psu = push -u
	pso = push origin
	psao = push --all origin
	psfo = push -f origin
	psuo = push -u origin
	psom = push origin master
	psfom = push -f origin master
	psuom = push -u origin master
	#############
	pl = pull
	plu = pull -u
	plo = pull origin
	plp = pull upstream
	plom = pull origin master
	plpm = pull upstream master
	#############
	pb = pull --rebase
	pbo = pull --rebase origin
	pbp = pull --rebase upstream
	pbom = pull --rebase origin master
	pbpm = pull --rebase upstream master
	#############
	rb = rebase
	rba = rebase --abort
	rbc = rebase --continue
	rbi = rebase --interactive
	rbs = rebase --skip
	#############
	re = reset
	rh = reset HEAD
	reh = reset --hard
	rem = reset --mixed
	res = reset --soft
	rehh = reset --hard HEAD
	remh = reset --mixed HEAD
	resh = reset --soft HEAD
	#############
	r = remote
	ra = remote add
	rr = remote rm
	rv = remote -v
	rm = remote rename
	rp = remote prune
	rs = remote show
	rao = remote add origin
	rau = remote add upstream
	rso = remote show origin
	rsu = remote show upstream
	rpo = remote prune origin
	rpu = remote prune upstream
	#############
	s = status
	sb = status -s -b
	#############
	sa = stash apply
	sc = stash clear
	sd = stash drop
	sl = stash list
	sp = stash pop
	ss = stash save
	sw = stash show
	#############
	w = show
	wp = show -p
	wr = show -p --no-color
	#############
	svnr = svn rebase
	svnd = svn dcommit
	svnl = svn log --oneline --show-commit
	#############
	assume = update-index --assume-unchanged
	unassume = update-index --no-assume-unchanged
	assumed = "!git ls-files -v | grep ^h | cut -c 3-"
	unassumeall = !git assumed | xargs git update-index --no-assume-unchanged
	assumeall = "!git st -s | awk {'print $2'} | xargs git assume"
	#############
	ours = "!f() { git checkout --ours $@ && git add $@; }; f"
	theirs = "!f() { git checkout --theirs $@ && git add $@; }; f"
	#############
	whois = "!sh -c 'git log -i -1 --pretty=\"format:%an <%ae>\n\" --author=\"$1\"' -"
	whatis = show -s --pretty='tformat:%h (%s, %ad)' --date=short
	#############
	barebranch = !sh -c 'git symbolic-ref HEAD refs/heads/$1 && git rm --cached -r . && git clean -xfd' -
	flat = clone --depth 1
	subpull = !git submodule foreach git pull --tags origin master
	subrepo = !sh -c 'filter-branch --prune-empty --subdirectory-filter $1 master' -
	human = name-rev --name-only --refs=refs/heads/*
	serve = !git daemon --reuseaddr --verbose  --base-path=. --export-all ./.git
	snapshot = !git stash save "snapshot: $(date)" && git stash apply "stash@{0}"

What is the difference between a relative and absolute path?
The path with reference to root directory is called absolute. The path with reference to current directory is called relative. this is a URL, and it can be seen in some way as an absolute path, but it's not representative for this matter.

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
pushd and popd

What keyboard shortcut do you use, in your editor, when you want to open a specific file?
Ctrl+p

What files or folders do you want all git repositories to ignore?
local files?

What is the main difference between == and === in JavaScript?
Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
Two Boolean operands are strictly equal if both are true or both are false.
Two objects are strictly equal if they refer to the same Object.
Null and Undefined types are == (but not ===). [I.e. (Null==Undefined) is true but (Null===Undefined) is false]

---
templateKey: thoughts
title: My Setup
date: 2019-10-24T15:04:10.000Z
description:
tags:
  - tech
  - setup
---

# My setup

### My Desktop/Laptop

* Operating system: Ubuntu Linux
  * have used Debian and Arch in the past; prefer Ubuntu because it's one less thing to think about
  * familiar with MacOS and Windows; prefer Linux because of the customizability, integration of development environment with casual use, speed, and security.
* Shell language: Zsh
  * see config files for my .zshrc and a handful of handy scripts

### My Servers

* Personal Website: Github Pages
  * Have used AWS, Google Cloud, and Digital Ocean in the past
  * Plan to make my current personal website a dynamic site relying on the full MEAN stack, and as part of that, I want to containerize it and host it via Kubernetes on the Google Cloud Platform.
  * Familiar with a variety of

### My Web Services

* Various
  * Email: Gmail for general use, G Suite for my toumey.io domain emails, and Protonmail for more general use
  * VPN: ProtonVPN
  * Password managers: LastPass for personal use, 1Password for work

### My phone

* Operating system: Android 8.1** (or whatever is the latest, if I don't update this)
  * Have used plenty of custom ROMs in the past; finally got tired of personalizing a device that I frankly don't use much beyond basically calling, messaging (only if away from my laptop), opening up annoying mobile websites when I am stuck waiting around in public, and occasionally just destroying my Circadian rhythm when I am laying in bed

### Other Devices

* Modem: Netgear CM1000
  * When I was in the market for modems, it was only marginally more expensive to get one that can handle gigabit speeds. Also, fuck Comcast; I am not paying their monthly fee to rent their modem.
* Router: Google WiFi
  * Not particularly useful currently beyond my previous routers. Was bought at a steep discount though, so no love is lost.
* Smartwatch: Polar M600
  * Love this guy for having quick access to information and collecting various biometrics about me
  * Wrote a custom watchface for it that I will be uploading here at some point
* Speaker Assistant: Google Home
* Network-Attached Storage
  * I will soon be setting up my 3TB media and personal research database repository on a RAIDed local file server, freeing up my need to connect an external HDD via USB (as I do currently)

### Various Apps and Configs

* Terminal emulator
  * Terminator
    * great for tiling multiple sessions
    * themed using [Powerlevel9k](https://github.com/bhilburn/powerlevel9k)
* IDEs
  * console + vim
    * a given for any Linux user
  * Atom
    * I love the speed and customization
    * ls -1 ~/.atom/packages
      * atom-unsaved-changes  autocomplete-ruby  dbg  Hydrogen	jekyll	jekyll-snippets  nuclide  stacktrace
      * atom-unsaved-changes
      * autocomplete-ruby
      * dbg
      * Hydrogen
      * jekyll
      * jekyll-snippets
      * markdown-mindmap
      * nuclide
      * stacktrace
  * RubyMine
    * useful for its very powerful tools, particularly with debugging
    * prefer to handle simple testing and version control from the command line, lest I get lazy
* Various packages
  * bumblebee
    * lets me switch between iGPU and dGPU on the fly
  * youtube-dl
    * great for quickly storing videos from youtube to your computer
    * lets you automatically convert the videos to audio files, using ffmpeg
    * there's a youtube-dl-gui package that provides a nice front end if you don't want to look up youtube-dl syntax everytime you use it, which is less than once a month for me
* Widgets
  * note: using Gnome, these are accessible via https://extensions.gnome.org/
  * indicator-multiload
  * Clipboard Indicator
    * not my favorite clipboard manager, but recent Gnome updates broke my previously preferred option: ClipIt
  * Dash to Dock
  * Bumblebee Indicator
  * TopIcons Plus
* Browser
  * Chrome
    * Better than Firefox (for my uses, at least) for a variety of reasons; this could easily be an entire blog post
    * Extensions
      * 1Password
      * AutoScroll
      * Chrome Remote Desktop
      * Earth View from Google Earth
      * Emoji for Google Chrome
      * Giphy for Chrome
      * Nimbus Screenshot and Screen Video Recorder
      * Pushbullet
      * Reddit Enhancement Suite
      * Signal
      * Stylish
      * Tabs Outliner
      * TeX All the Things
      * TinEye Reverse Image Search
      * Toggle JavaScript
      * uBlock Origin

* Note taking
  * Freeplane
    * keyboard shortcuts
      * tab to edit node core
      * shift tab to create child node
  * Google Keep
    * not the greatest level of sophistication, but handy for quick syncing of notes and easy access from any device
  * Gedit
    * useful for scribbling or temporarily storing text when working on something
* Communication
  * Signal
  * Slack
  * WhatsApp
  * Pushbullet (notifcations and texting from desktop)
* Media
  * Rhythmbox
  * VLC
  * Spotify
* Games
  * Steam
  * el Xboxo
    * eat my heart out

### Other

* Remove Amazon code from Ubuntu
  * sudo apt purge ubuntu-web-launchers

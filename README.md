Ubuntu Graphics Suite
=====================

This microsite let you easily select which libre graphics pakages you want to install on your GNU/Linux based Ubuntu system and install them easily with [Cleanstart script](https://silverwav.wordpress.com/2010/03/18/a-cleanstart-for-your-new-ubuntu-install-packages-from-a-list/).

Please help to add more PPAs :)


## How to Add new PPAs

PPAs are added as jekyll posts into this repo.

- Fork the repo
- Create a new post in `_posts`
- Name it `YYYY-MM-DD-application-name.md` structure.
- Copy the structure from this..

```
---
layout: post
title: <NAME OF THE SOFTWARE>
name: <NAME OF THE SOFTWARE IN LOWERCASE ONLY WITHOUT SPACES.>
ppa: <PPA NAME AND LINK ppa:username/ppaname > 
status: <PPA STATUS OFFICAL STABLE/ OFFICAL EXPERIMANTAL / UNOFFICAIAL>
install: <INSTALL COMMAND>
tags:
    - <ADD A TAG>
catagory: design
---
```
- Creat a Pull request.


Or, if you are too lazy file an issue, someone will add it eventually :)

## Disclaimer

This is a collection of ppa's that we have collected since we started using Ubuntu 14.04 at our studio. We like to use the latest bleeding edge builds with all new features. But they have bugs and might crash, we have a solid backup system with Sparcklshare. If you are doing projects that is time sensitive and if your bakcup system sucks, scroll down to see the command to install stable older packages from Ubuntu Software Centre.

There might be compatibility issues on some of the latest versions like Scribus. So google around and/or visit the PPA page on Launchpad and findout weather it works for you.

CHECK WHEN THIS DOC WAS UPDATED BEFORE YOU DO ANYTHING. WE MIGHT NOT KEEP UPDATING THIS DOC.

There are many different Libre softwares that do the same tasks.. this is based on just our preference.

## Credits

-  [Cleanstart script](https://silverwav.wordpress.com/2010/03/18/a-cleanstart-for-your-new-ubuntu-install-packages-from-a-list/).
-  Site by @pathumego


## License
Site and contents licensed under GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See the LICENSE file for full text.

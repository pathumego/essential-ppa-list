Ubuntu Graphics Suite
=====================


This is a collection of ppa's that we have collected since we started using Ubuntu 14.04 at our studio. We like to use the latest bleeding edge builds with all new features. But they have bugs and might crash, we have a solid backup system with Sparcklshare. If you are doing projects that is time sensitive and if your bakcup system sucks, scroll down to see the command to install stable older packages from Ubuntu Software Centre.

There might be compatibility issues on some of the latest versions like Scribus. So google around and/or visit the PPA page on Launchpad and findout weather it works for you.

CHECK WHEN THIS DOC WAS UPDATED BEFORE YOU DO ANYTHING. WE MIGHT NOT KEEP UPDATING THIS DOC.

There are many different Libre softwares that do the same tasks.. this is based on just our preference.


## How to Add new PPAs

PPAs are added as jekyll posts into this repo.

- Fork the repo
- Create a new post in `_posts`
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




## Install with Clean Start

We made a pakagelist to be installed using [Cleanstart](https://silverwav.wordpress.com/2010/03/18/a-cleanstart-for-your-new-ubuntu-install-packages-from-a-list/) by silverwav and [Ubuntu post installation script](http://voidandany.free.fr/index.php/installer-de-facon-automatique-une-liste-de-package-et-les-depots-associes/) by VoidAndAny 

NOT TESTED!

Install Aptitude First, On Terminal do the following.

`sudo apt-get install aptitude`

Then extract `cleanstart-packages.list.sh` and `packages.list` into the same folder. Acess the folder on Terminal. Then do the following.

`sudo sh cleanstart-packages.list.sh`


# Install from Ubuntu Repositories

```
sudo apt-get install inkscape gimp scribus 

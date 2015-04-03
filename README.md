essential-ppa-list
==================

This is a collection of ppa's that I have collected since I started using Ubuntu 14.04 on my Mac. I mostly do design work and the software selection on this list is based on personal preference only.

I like to use the latest bleeding edge builds. So use at your own risk.

# Install with Clean Start

I made a pakagelist to be installed using [Cleanstart](https://silverwav.wordpress.com/2010/03/18/a-cleanstart-for-your-new-ubuntu-install-packages-from-a-list/) by silverwav and [Ubuntu post installation script](http://voidandany.free.fr/index.php/installer-de-facon-automatique-une-liste-de-package-et-les-depots-associes/) by VoidAndAny 

Install Aptitude First, On Terminal do the following.

`sudo apt-get install aptitude`

Then extract `cleanstart-packages.list.sh` and `packages.list` into the same folder. Acess the folder on Terminal. Then do the following.

`sudo sh cleanstart-packages.list.sh`



#Utilities

##Simple Screen Recorder
```
sudo add-apt-repository ppa:maarten-baert/simplescreenrecorder
sudo apt-get update && sudo apt-get install simplescreenrecorder
```

##Tor
```
sudo add-apt-repository ppa:webupd8team/tor-browser
sudo apt-get update && sudo apt-get install tor-browser
```


##VLC Stable Daily

```
sudo add-apt-repository ppa:videolan/stable-daily 
sudo apt-get update && sudo apt-get install vlc

```

#Grphics Suit 

##FontForge
```
sudo add-apt-repository ppa:fontforge/fontforge
sudo apt-get update && sudo apt-get install fontforge

```
##Inkscape Trunk Builds
```
sudo add-apt-repository ppa:inkscape.dev/trunk
sudo apt-get update && sudo apt-get install inkscape-trunk
```
##GIMP Edge
```
sudo add-apt-repository ppa:otto-kesselgulasch/gimp-edge
sudo apt-get update && sudo apt-get install gimp
```

##GIMP Edge

```
sudo add-apt-repository ppa:scribus/ppa
sudo apt-get update && sudo apt-get install scribus
```

##Krita (LIME Experimental)

```
sudo add-apt-repository ppa:dimula73/krita
sudo apt-get update && sudo sudo apt-get install krita-testing krita-testing-dbg 
```

##SVG Cleaner

```
sudo add-apt-repository ppa: svg-cleaner-team / svgcleaner
sudo apt-get update && sudo apt-get install svgcleaner
```

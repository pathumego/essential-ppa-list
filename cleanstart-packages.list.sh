#! / Bin / bash
 
################################################## ############################## 
# Ubuntu (> 9.10) post installation script 
by VoidAndAny # 
# 
# based on Clean Start-packages. list.sh by silverwav - OpenPGP key: 03187548 15 Apr 2009 
# 
# this script and read a config file: 
# add PPA with add-apt-repository 
# --other add repositories (not PPP) by writing 'em in a .list file in / etc / apt / source.list.d 
add GPG keys # 
# install package using aptitude install 
# remove pacakge using aptitude remove 
# 
######################## ################################################## ###### 
# 
# Usage: 
# installation.sh 
# (reads a file called Expired packages.list by default). 
# or 
# installation.sh <filename> 
# 
# Any line starting with a # is ignored as are lines Blank . 
# Line Beginning by "PPP" Followed By a are used to add PPA repository 
Line # Beginning by "deb http", containing ">" Followed by a file name with ".list" extension are used to add repository in / etc /apt/sources.list.d/ 
Line # Beginning by "key" Followed by a key id are used to add GPG key from keyserver.ubuntu.com 
Line # Beginning by "http:", ending by ".gpg" are used to download and add GPG key URL froman 
# Other lines are package 



 
 (Clean Start) Script for Installing packages (client) " 
echo  "------------------------------------- ------------------------------------------- "
 
# Assurer script is run as root / sudo 
if  [  " $ (id -u) "  ! = "0"  ] 
Then 
 echo  "" 
 echo  "Must execute the script as root user." 
 echo  "-------- -------------------------------------------------- ---------------------- " 
 exit  1 
fi
 
# Check the count argument 
if  [  $ #  -gt  "1"  ] 
Then 
 echo  "" 
 echo  "Only one file with package names allowed." 
 echo  "--------------------------------------------------------------------------------" 
 exit  1 
fi
 
################################################## ############################## 
#### Main 
#### args: (1) 
#### 1. [out] List of input package names 
########################################## ######################################
 
CONFIG_FILE = "" 
# package names To Be installed 
PACKAGE_NAME_LIST = ""
 
# Check if filename was supplied as comand line parameter 
if  [  $ #  -eq  "1"  ] 
Then 
 CONFIG_FILE = $ 1 
else 
 CONFIG_FILE = packages.list
 fi
 
PACKAGE_NAME_LIST = $ ( cat  $ CONFIG_FILE  |  grep  -v  -E  "(^ #) | (^ ppa:) | (^ deb http) | (^ -) | (^ key:) | (^ http: * \.. gpg) "  |  awk  -F '#'  '{print $ 1}' ) 
REMOVE_PACKAGE_LIST = $ ( cat  $ CONFIG_FILE  |  grep  -E  '^ - "  |  awk  -F '#'  '{print $ 1}'  |  sed  's / ^ - // g ' ) 
PPA_NAME_LIST = $ ( cat  $ CONFIG_FILE  |  grep  -E  '^ ppa "  |  awk  -F '#'  '{print $ 1}' ) 
REPOSITORY_KEY_LIST = $ ( cat  $ CONFIG_FILE  |  grep  -E  "^ key: "  |  awk  -F '#'  '{print $ 1}'  |  sed  's / ^ key: // g' ) 
GPG_URL_LIST = $ ( cat  $ CONFIG_FILE  |  grep  -E  "^ http:.. * \ gpg"  |  awk  -F '#'  '{print $ 1}' )
 
echo  "" 
echo  "Installing PPA:"  ${PPA_NAME_LIST} 
echo  "--------------------------------------------------------------------------------"
 
for i in $ ( echo   $ PPA_NAME_LIST  ) ; do 
 add-apt-repository $ i ;
 done
 
echo  "" 
echo  "Installing --other repositories (not PPP)" 
echo  "----------------------------------- --------------------------------------------- "
 
cat  $ CONFIG_FILE  |  grep  -E  "... ^ deb http: *> * \ List '  |  awk  -F '>'  '{gsub (/ [[: space:]] * /, "", $ 2); print $ 1> "/etc/apt/sources.list.d/"$2} '
 
echo  "" 
echo  "Adding GPG key of --other repositories (not PPP)" 
echo  "-------------------------------- ------------------------------------------------ "
 
for i in $ ( echo  $ REPOSITORY_KEY_LIST  ) ; do 
 apt-key adv --keyserver keyserver.ubuntu.com --recv-key  $ i ;
 done
 
for i in $ ( echo  $ GPG_URL_LIST  ) ; do 
 wget  -O - $ i  |  sudo  apt-key add -;
 therefore
 
echo  "" 
echo  "Updating ..." 
echo  "-------------------------------------- ------------------------------------------ "
 
aptitude update
 
echo  "" 
echo  "Installing  
 
add the -y 
aptitude  install  $ {} PACKAGE_NAME_LIST
 
echo  "" 
echo  "Uninstalling packages:"  ${REMOVE_PACKAGE_LIST} 
echo  "--------------------------------------------------------------------------------"
 
aptitude remove $ {} REMOVE_PACKAGE_LIST
 
echo  "" 
echo  "Done" 
echo  "--------------------------------------------------------------------------------"

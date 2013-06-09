Ninja Diskspace Module
======================
Author: Paul Cullender
Version: 1.0
Status: Stable
License: BSD


## Installation
### Step 1 - fetch driver
```
cd PATH_TO_NINJA_CLIENT/drivers
git clone https://github.com/paulcull/ninja-diskspace.git
cd ninja-diskspace
npm install
```

check the device that you want monitor
df -k

results should look like
```
ubuntu@ninjablock:~$ df -k
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/mmcblk0p2   3736512 1026724   2522448  29% /
udev              124224       4    124220   1% /dev
tmpfs              50316     180     50136   1% /run
none                5120       0      5120   0% /run/lock
none              125780       0    125780   0% /run/shm
tmpfs              51200    6128     45072  12% /var/log
/dev/mmcblk0p1     65390   11152     54238  18% /boot/uboot
```
defaults to 0p2 for the ninjablock, but you can use the driver
configuration to change the string to search for in the
output from df -k

### Step 2 - restart process

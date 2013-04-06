Ninja Diskspace Module
======================

## Installation
### Step 1 - fetch module (must be on develop branch)
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
change the disk_to_monitor varialble to part of the string for that device 
e.g. 0p2 would work for the root device

### Step 2 - restart process

---
unlisted: true
---
# Linux安装

## Official Installation Tutorials

### Launcher Installation
> **Official launcher installation tutorial (Note: This is launcher installation)**
> https://www.sidefx.com/docs/houdini/licensing/install_launcher.html

### Client Installation
> **Official client installation tutorial (Note: This is client installation)**
> https://www.sidefx.com/faq/question/install-linux/

## Troubleshooting

### Houdini Client Crashes
If Houdini crashes when opening, run the following commands in the terminal (replace the version number as needed):
```bash
cd /opt/hfs19.0.383
source houdini_setup_bash
houdinifx &
```
Check the error message. If it's related to Qt, follow the instructions below.

### Missing Qt Dependencies
If Houdini doesn't respond when launched (likely due to missing Qt dependencies), install them with these commands:
```bash
sudo add-apt-repository ppa:okirby/qt6-backports
sudo apt-get upgrade
sudo apt install qt6-base-dev
sudo apt-get install --reinstall libxcb-xinerama0
```

## Graphics Drivers

### AMD Drivers
For AMD graphics cards, download and install drivers from:
- https://amdgpu-install.readthedocs.io/en/latest/install-prereq.html#downloading-the-installer-package
- https://www.amd.com/en/support/professional-graphics/radeon-pro/radeon-pro-w5000-series/radeon-pro-w5500

### NVIDIA Drivers
For NVIDIA graphics cards:

1. Update your system:
   - Open "Software & Updates"
   - Go to "Additional Drivers" tab
   - Select "software update" and choose upgrade

2. Driver Selection:
   - **Important**: For Ubuntu 22.xx, if installing NVIDIA drivers causes black screen on startup, choose driver version 470 instead of 5.x series

3. To uninstall NVIDIA drivers:
   ```bash
   sudo nvidia-uninstall
   ```

4. If unable to select a driver:
   ```bash
   sudo ubuntu-drivers install
   ```

## Redshift Renderer

### Download
- https://www.maxon.net/en/downloads
- Compatible version: Redshift 3.5.24 for Houdini 20.0.590

### Installation
- **Installing Redshift on Linux**: https://help.maxon.net/r3d/houdini/en-us/Content/html/Installing+Redshift+on+Linux.html
- **Installing and using the Maxon App on Linux**: https://support.maxon.net/hc/en-us/articles/4488783771154-Installing-and-using-the-Maxon-App-on-Linux

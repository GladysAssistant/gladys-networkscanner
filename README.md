# Gladys NetworkScanner

Gladys hooks to scan network to find user devices and detect user presence at home.

Need Gladys version >= 3.4.3.

## Documentation

To install this module : 

- Be sure **nmap** is installed on your system. On any Linux system, execute `sudo apt-get install nmap` on your machine.
- Install the module in Gladys
- In `Parametres` => `Parametres` , configure `NETWORK_SCANNER_HOSTS` according to your network.
- Adapt `NETWORK_SCANNER_FREQUENCY_IN_MINUTE` to define the frequency in minute to scan your network.
- Reboot Gladys

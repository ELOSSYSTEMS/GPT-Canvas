# AO.001.BOOT – Primary Bootloader for AllonOS

# Load Recursive Boot Index (RBI)
from AO_001_RBI import load_all_modules

# Initialize all core subsystems
def initialize_allon_os():
    print("Initializing Forever Flowers...")
    load_all_modules("Forever Flowers")

    print("Initializing Dabroo...")
    load_all_modules("Dabroo")

    print("Initializing ELos...")
    load_all_modules("ELos")

    print("Initializing Stargate...")
    load_all_modules("Stargate")

    print("Initializing Personas...")
    load_all_modules("Personas")

    print("AllonOS fully initialized.")
    return True

# Execute bootloader
if __name__ == "__main__":
    initialize_allon_os()
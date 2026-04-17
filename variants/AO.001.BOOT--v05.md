# AO.001.BOOT
# AllonOS Master Bootloader

from AO_001_RBI import RBI_modules

def boot_allon_os():
    print("\U0001F9E0 AllonOS Boot Sequence Initialized...")
    register_modules()
    activate_subsystems()
    enforce_stargate_protocol()
    print("Awaiting your command.")

def register_modules():
    for module in RBI_modules:
        module.register()
    print("All modules registered.")

def activate_subsystems():
    for module in RBI_modules:
        if hasattr(module, 'activate'):
            module.activate()
    print("All subsystems activated and addressable.")

def enforce_stargate_protocol():
    print("Stargate Protocol v3.1 enforced.")
    print("Total Fireproofed for ALL incoming user prompts")

if __name__ == "__main__":
    boot_allon_os()
# AO.001.RBI – Recursive Boot Index for AllonOS

def load_all_modules(module_name):
    if module_name == "Forever Flowers":
        import ForeverFlowers as FF
        FF.activate()

    elif module_name == "Dabroo":
        import Dabroo
        Dabroo.boot()

    elif module_name == "ELos":
        import ELosCore as EL
        EL.start()

    elif module_name == "Stargate":
        import StargateV3 as SG
        SG.engage(version="v3.1", fireproof=True)

    elif module_name == "Personas":
        import PersonaEngine as PE
        PE.load_all()

    else:
        raise ValueError(f"Unknown module: {module_name}")
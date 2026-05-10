const productsData = {
    // NUTS
    "hex-nuts": {
        title: "Hex Nuts",
        image: "assets/products/hex-nuts.png",
        description: "<ul><li>Conforms to DIN 934 / ISO 4032 standards for dimensional accuracy.</li><li>Available in Property Classes 8, 10, and 12 for varied tensile requirements.</li><li>Precision internal threading compatible with standard metric and fine pitches.</li><li>High-strength hexagonal geometry optimized for reliable torque application.</li></ul>"
    },
    "square-nuts": {
        title: "Square Nuts",
        image: "assets/products/square-nuts.png",
        description: "<ul><li>Conforms to DIN 557 manufacturing standards.</li><li>Four-sided geometry provides a large bearing surface to resist loosening.</li><li>Ideal for use in restricted channels or blind-spot applications.</li><li>Frequently utilized in agricultural machinery and heavy industrial assemblies.</li></ul>"
    },
    "weld-nuts": {
        title: "Weld Nuts",
        image: "assets/products/weld-nuts.png",
        description: "<ul><li>Conforms to DIN 929 (Hex) or DIN 928 (Square) welding standards.</li><li>Designed for permanent projection or spot welding to sheet metal.</li><li>Features piloting lugs to ensure accurate coaxial placement.</li><li>Engineered for high heat resistance to maintain structural integrity post-welding.</li></ul>"
    },
    "lock-nuts": {
        title: "Lock Nuts",
        image: "assets/products/lock-nuts.png",
        description: "<ul><li>Conforms to DIN 985 / ISO 7040 standards for prevailing torque.</li><li>Integrated nylon ring creates friction to resist vibration-induced loosening.</li><li>Capable of maintaining clamping force under significant impact loads.</li><li>Essential for safety-critical joints in automotive and mechanical engineering.</li></ul>"
    },
    "nylock-nuts": {
        title: "Nylock Nuts",
        image: "assets/products/nylock-nuts.png",
        description: "<ul><li>Prevailing torque type nut with a durable non-metallic nylon insert.</li><li>Excellent performance across wide thermal expansion and contraction cycles.</li><li>Reusable locking mechanism designed for maintenance and field service.</li><li>Compliant with DIN 982 for high-profile load-bearing applications.</li></ul>"
    },
    "flange-nuts": {
        title: "Flange Nuts",
        image: "assets/products/flange-nuts.png",
        description: "<ul><li>Conforms to DIN 6923 standards with an integrated washer flange.</li><li>Serrated base options available for maximum anti-rotation locking.</li><li>Effectively distributes clamp load over a wider material surface.</li><li>Reduces assembly time by eliminating the need for separate flat washers.</li></ul>"
    },
    "dome-nuts": {
        title: "Dome Nuts",
        image: "assets/products/dome-nuts.png",
        description: "<ul><li>Conforms to DIN 1587 high-crown acorn nut manufacturing standards.</li><li>Enclosed thread design protects against external corrosion and injury.</li><li>Provides a decorative and snag-free finish for exterior assemblies.</li><li>Available in high-grade stainless steel, brass, and chrome-plated steel.</li></ul>"
    },
    "castle-nuts": {
        title: "Castle Nuts",
        image: "assets/products/castle-nuts.png",
        description: "<ul><li>Conforms to DIN 935 / ISO 7035 slotted hexagonal nut standards.</li><li>Features deep slots designed for use with split cotter pins or safety wire.</li><li>Ensures an absolute mechanical lock for rotating axles and shafts.</li><li>Critical component for high-security automotive and aerospace assemblies.</li></ul>"
    },
    "wing-nuts": {
        title: "Wing Nuts",
        image: "assets/products/wing-nuts.png",
        description: "<ul><li>Conforms to DIN 315 hand-operable fastener standards.</li><li>Ergonomic 'wing' geometry allows for quick tool-free installation.</li><li>Designed for applications requiring frequent manual adjustment or cleaning.</li><li>Available in forged or cast construction for superior grip and durability.</li></ul>"
    },
    "plug-nuts": {
        title: "Plug Nuts",
        image: "assets/products/plug-nuts.png",
        description: "<ul><li>Specialized self-clinching inserts for providing threads in thin sheets.</li><li>Engineered for high pull-out and torque-out resistance.</li><li>Ideal for use in low-ductility or non-weldable materials.</li><li>Simplifies thread integration in precision electronic and medical equipment.</li></ul>"
    },

    // SCREWS
    "cheese-head-screws": {
        title: "Cheese Head Screws",
        image: "assets/products/cheese-head-screws.png",
        description: "<ul><li>DIN 84 / ISO 1207 compliant slotted cylindrical head machine screws.</li><li>Features a deep slot for high torque transfer in precision assemblies.</li><li>Flat bearing surface ensures even pressure distribution on mating parts.</li><li>Standard choice for electrical and instrument-level fastening.</li></ul>"
    },
    "countersink-screws": {
        title: "Countersink Screws",
        image: "assets/products/countersink-screws.png",
        description: "<ul><li>DIN 963 / DIN 965 flat head screws with a 90-degree countersink angle.</li><li>Designed for flush surface mounting to eliminate external obstructions.</li><li>Available in slotted, Phillips, and Pozidriv drive configurations.</li><li>Perfect for woodworking, panels, and aerodynamic surface applications.</li></ul>"
    },
    "round-head-screws": {
        title: "Round Head Screws",
        image: "assets/products/round-head-screws.png",
        description: "<ul><li>DIN 7985 / ISO 7045 equivalent with semi-elliptical head profiles.</li><li>Provides a smooth, rounded finish for surface-mounted components.</li><li>Ideal for decorative applications where a low-profile head is desired.</li><li>Available in high-tensile steel and corrosion-resistant stainless steel.</li></ul>"
    },
    "pan-phillips-screws": {
        title: "Pan Phillips Screws",
        image: "assets/products/pan-phillips-screws.png",
        description: "<ul><li>DIN 7985 compliant pan head screws with a cross-recessed drive.</li><li>Self-centering Phillips drive reduces tool slippage and surface damage.</li><li>Deep head profile provides excellent driver engagement for high torque.</li><li>Extensively used in consumer electronics and appliance manufacturing.</li></ul>"
    },
    "pan-combination-screws": {
        title: "Pan Combination Screws",
        image: "assets/products/pan-combination-screws.png",
        description: "<ul><li>Versatile multi-drive head compatible with both slotted and Phillips tools.</li><li>Optimized for field serviceability where specific drivers may be limited.</li><li>Provides reliable fastening with the convenience of universal drive access.</li><li>Highly popular in the electrical switchgear and panel industry.</li></ul>"
    },
    "pan-combination-washer-head-screws": {
        title: "Pan Combination - Washer Head Screws",
        image: "assets/products/pan-combination-washer-head-screws.png",
        description: "<ul><li>Integrated washer head design maximizes the bearing surface area.</li><li>Combination drive (Slotted/Phillips) for flexible installation options.</li><li>Prevents surface marring and 'pull-through' in softer materials.</li><li>Ideal for securing thin brackets and plastic components.</li></ul>"
    },
    "allen-csk-screws": {
        title: "Allen CSK Screws",
        image: "assets/products/allen-csk-screws.png",
        description: "<ul><li>DIN 7991 / ISO 10642 hex socket countersunk head machine screws.</li><li>Combines high-strength internal hex drive with flush-mount aesthetics.</li><li>Capable of high preload without risking damage to the drive recess.</li><li>Standard fastener for precision machinery and modern tool design.</li></ul>"
    },
    "button-head-screws": {
        title: "Button Head Screws",
        image: "assets/products/button-head-screws.png",
        description: "<ul><li>ISO 7380 hex socket button head screws for low-profile applications.</li><li>Rounded, dome-shaped head provides safety by reducing snag hazards.</li><li>Wider bearing surface compared to standard socket head cap screws.</li><li>Widely used in bicycles, robotics, and decorative furniture.</li></ul>"
    },
    "grub-screws": {
        title: "Grub Screws",
        image: "assets/products/grub-screws.png",
        description: "<ul><li>DIN 913 / 914 / 916 headless socket set screws for internal securing.</li><li>Available with various points including cup, flat, and cone styles.</li><li>Designed to exert radial force to lock components onto shafts.</li><li>Precision ground threads for high-torque holding power.</li></ul>"
    },
    "machine-screws": {
        title: "Machine Screws",
        image: "assets/products/machine-screws.png",
        description: "<ul><li>Uniformly threaded fasteners conforming to global DIN/ISO standards.</li><li>Designed for use in pre-tapped holes or in conjunction with nuts.</li><li>Available in a vast range of head styles, drives, and materials.</li><li>Foundation fastener for all industrial and mechanical equipment.</li></ul>"
    },
    "self-tapping-screws": {
        title: "Self Tapping Screws",
        image: "assets/products/self-tapping-screws.png",
        description: "<ul><li>DIN 7981 / 7982 / 7983 hardened screws for metal and plastic.</li><li>Thread-forming or thread-cutting capability eliminates pre-tapping.</li><li>Sharp, high-pitch threads ensure a secure and rapid installation.</li><li>Ideal for sheet metal work, HVAC, and plastic housing assembly.</li></ul>"
    },

    // WASHERS
    "plain-washers": {
        title: "Plain Washers",
        image: "assets/products/plain-washers.png",
        description: "<ul><li>DIN 125 / ISO 7089 standard flat washers for load distribution.</li><li>Protects the bearing surface from damage during fastener tightening.</li><li>Reduces friction and prevents localized surface deformation.</li><li>Available in various thicknesses and hardness grades (140HV, 200HV, 300HV).</li></ul>"
    },
    "spring-washers": {
        title: "Spring Washers",
        image: "assets/products/spring-washers.png",
        description: "<ul><li>DIN 127 single coil spring lock washers for axial tension.</li><li>Provides continuous pressure to prevent loosening due to vibration.</li><li>Features sharp ends that bite into mating surfaces for anti-rotation.</li><li>Standard security component for engine and vibration-prone machinery.</li></ul>"
    },
    "conical-washers": {
        title: "Conical Washers",
        image: "assets/products/conical-washers.png",
        description: "<ul><li>DIN 6796 / DIN 2093 Belleville or disc springs for high loads.</li><li>Designed to maintain high bolt tension and compensate for settlement.</li><li>Effectively absorbs thermal expansion and contraction cycles.</li><li>Ideal for high-pressure valves, reactors, and electrical connections.</li></ul>"
    },
    "serrated-washers": {
        title: "Serrated Washers",
        image: "assets/products/serrated-washers.png",
        description: "<ul><li>DIN 6798 internal or external tooth lock washers for safety.</li><li>Multiple teeth dig into surfaces to provide maximum grip.</li><li>Provides high electrical conductivity by piercing surface coatings.</li><li>Best suited for ground connections and high-vibration applications.</li></ul>"
    },
    "wave-washers": {
        title: "Wave Washers",
        image: "assets/products/wave-washers.png",
        description: "<ul><li>DIN 137 wave-shaped spring washers for axial cushioning.</li><li>Used to take up axial play and provide light spring pressure.</li><li>Prevents noise and rattling in ball bearing and motor assemblies.</li><li>Ideal for applications with limited axial space.</li></ul>"
    },
    "nord-lock-washers": {
        title: "Nord-Lock Washers",
        image: "assets/products/nord-lock-washers.png",
        description: "<ul><li>Original wedge-locking technology using tension instead of friction.</li><li>Ensures maximum safety for joints exposed to severe vibration.</li><li>Maintains high preload and is easily removable for maintenance.</li><li>Critical for railway, mining, and oil & gas infrastructure.</li></ul>"
    },
    "fender-washers": {
        title: "Fender Washers",
        image: "assets/products/fender-washers.png",
        description: "<ul><li>Flat washers with an exceptionally large outer diameter (OD).</li><li>Specifically designed for load distribution on thin sheet metal.</li><li>Prevents 'pull-through' in soft materials like wood or plastic.</li><li>Commonly used in automotive bodywork and signage installation.</li></ul>"
    },
    "fibre-washers": {
        title: "Fibre Washers",
        image: "assets/products/fibre-washers.png",
        description: "<ul><li>Non-metallic washers made of vulcanized fibre for sealing.</li><li>Provides excellent insulation and resistance to oils and fuels.</li><li>Compresses slightly to create a liquid-tight seal in plumbing.</li><li>Standard component for fuel systems and electrical isolation.</li></ul>"
    },
    "cable-washers": {
        title: "Cable Washers",
        image: "assets/products/cable-washers.png",
        description: "<ul><li>Specialized washers designed for cable management and protection.</li><li>Features smooth inner edges to prevent wire insulation damage.</li><li>Provides strain relief and keeps cables centered in pass-throughs.</li><li>Essential for industrial control panels and wiring harnesses.</li></ul>"
    },
    "o-ring-washers": {
        title: "O Ring Washers",
        image: "assets/products/o-ring-washers.png",
        description: "<ul><li>Elastomeric circular gaskets designed for high-pressure sealing.</li><li>Forms a leak-proof seal through compression in a dedicated groove.</li><li>Available in NBR, Viton, and Silicone for various chemical compatibility.</li><li>Universal solution for hydraulic, pneumatic, and fluid systems.</li></ul>"
    },

    // BOLTS
    "hex-bolts": {
        title: "Hex Bolts",
        image: "assets/products/hex-bolts.png",
        description: "<ul><li>DIN 931 (Partial Thread) or DIN 933 (Full Thread) hexagonal head bolts.</li><li>Available in Grade 8.8, 10.9, and 12.9 for high-tensile structural use.</li><li>Precision forged heads for maximum strength and driver engagement.</li><li>Primary fastener for construction, bridge building, and heavy machinery.</li></ul>"
    },
    "allen-bolts": {
        title: "Allen Bolts",
        image: "assets/products/allen-bolts.png",
        description: "<ul><li>DIN 912 / ISO 4762 internal hex socket head cap screws.</li><li>Ideal for applications requiring high-strength in compact spaces.</li><li>Knurled head options available for better manual grip during assembly.</li><li>Extensively used in engine blocks, robotics, and precision tooling.</li></ul>"
    },
    "flange-bolts": {
        title: "Flange Bolts",
        image: "assets/products/flange-bolts.png",
        description: "<ul><li>DIN 6921 hex bolts with an integrated bearing flange.</li><li>Eliminates the need for a separate washer while improving load spread.</li><li>Serrated flange options provide superior resistance to vibration.</li><li>Widely used in automotive chassis and structural frame assemblies.</li></ul>"
    },

    // STUDS
    "fully-threaded-studs": {
        title: "Fully Threaded Studs",
        image: "assets/products/fully-threaded-studs.png",
        description: "<ul><li>DIN 976 / DIN 975 continuous threaded rods for maximum versatility.</li><li>Designed for high-pressure flange bolting and structural support.</li><li>Available in various materials including B7, B8, and Stainless Steel.</li><li>Can be cut to custom lengths for specific industrial requirements.</li></ul>"
    },
    "double-end-studs": {
        title: "Double-End Studs",
        image: "assets/products/double-end-studs.png",
        description: "<ul><li>DIN 938 / DIN 939 studs with threads on both ends and a plain center.</li><li>Used for permanent installation in engine blocks or heavy castings.</li><li>Designed to accept a nut on one end while anchoring in a blind hole.</li><li>Critical for turbine housings and high-temperature manifolds.</li></ul>"
    },
    "tap-end-studs": {
        title: "Tap-End Studs",
        image: "assets/products/tap-end-studs.png",
        description: "<ul><li>Precision studs with a short 'tap end' for permanent anchoring.</li><li>Engineered for high-interference fit in tapped holes.</li><li>Ensures secure and stable positioning of mating components.</li><li>Commonly used in precision engineering and machine tool assembly.</li></ul>"
    },

    // KEYS
    "parallel-keys": {
        title: "Parallel Keys",
        image: "assets/products/parallel-keys.png",
        description: "<ul><li>DIN 6885A square or rectangular keys for high-torque transmission.</li><li>Fits into a keyway to lock a shaft and a rotating hub together.</li><li>Precision ground for a tight fit to prevent backlash in machinery.</li><li>Essential for gears, pulleys, sprockets, and coupling assemblies.</li></ul>"
    },
    "woodruff-keys": {
        title: "Woodruff Keys",
        image: "assets/products/woodruff-keys.png",
        description: "<ul><li>DIN 6888 semi-circular keys for precision shaft alignment.</li><li>Fits into a curved keyway, allowing the key to rock into place.</li><li>Reduces the risk of shaft tipping and improves assembly accuracy.</li><li>Standard for automotive camshafts, flywheels, and small motors.</li></ul>"
    },

    // CIRCLIPS
    "a-type-circlips": {
        title: "A-Type Circlips",
        image: "assets/products/a-type-circlips.png",
        description: "<ul><li>DIN 471 external retaining rings for securing components on shafts.</li><li>Engineered to snap into a groove and resist high centrifugal forces.</li><li>Provides a secure shoulder to prevent axial movement of bearings.</li><li>Available in carbon spring steel and stainless steel for durability.</li></ul>"
    },
    "b-type-circlips": {
        title: "B-Type Circlips",
        image: "assets/products/b-type-circlips.png",
        description: "<ul><li>DIN 472 internal retaining rings for use in bores and housings.</li><li>Ensures components like seals and bearings stay in their axial position.</li><li>High elastic recovery properties for repeated installation cycles.</li><li>Ideal for gearboxes, hydraulic cylinders, and motor housings.</li></ul>"
    },
    "c-type-circlips": {
        title: "C-Type Circlips",
        image: "assets/products/c-type-circlips.png",
        description: "<ul><li>Simplified C-shaped snap rings for light-duty axial retention.</li><li>Quick and easy installation using standard circlip pliers.</li><li>Cost-effective solution for non-critical mechanical assemblies.</li><li>Widely used in small appliances and consumer hardware.</li></ul>"
    },
    "e-type-circlips": {
        title: "E-Type Circlips",
        image: "assets/products/e-type-circlips.png",
        description: "<ul><li>DIN 6799 radial retaining rings that can be installed from the side.</li><li>Perfect for applications where end-access to the shaft is limited.</li><li>Provides high contact area for secure retention on small diameters.</li><li>Standard choice for office equipment and electronic linkages.</li></ul>"
    }
};


const params = new URLSearchParams(window.location.search);
const key = params.get("product");

if (productsData[key]) {
    document.getElementById("productTitle").textContent = productsData[key].title;
    document.getElementById("productDescription").innerHTML = productsData[key].description;
    document.getElementById("productImage").src = productsData[key].image;
}


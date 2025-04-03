const predefinedPaths = {
    "Main Gate-B-Block": [
        { x: 95, y: 654},  // Main Gate
       // { x: 300, y: 180 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1018, y: 654 },  // 🔴 Fake location (Hidden waypoint)
        { x: 1011, y: 709 }   //B-Block 
    ],
    "Main Gate-C-Block": [
        { x: 152, y: 655 },  // 📍 Main Gate
        { x: 283, y: 652},  // 🔴 Fake location (Hidden waypoint)
         { x: 287, y: 413 },  // 🔴 Fake location (Hidden waypoint)
        { x: 607, y: 283 }   // 📍 C-Block
    ],
    "Main Gate-A-Block": [
        { x: 152, y: 655 },  // Main Gate
        { x: 577, y: 648 },  // 🔴 Fake location (Hidden waypoint)
        { x: 579, y: 690 }   // A-Block
    ],
    "Main Gate-Adimission": [
        { x: 152, y: 655 },  // Main Gate
        { x: 283, y: 652},  // 🔴 Fake location (Hidden waypoint)
        { x: 288, y: 424},  // 🔴 Fake location (Hidden waypoint)
        { x: 258, y: 440}   //Adimission 
    ],
    "Main Gate-Boys Hostel": [
        { x: 152, y: 655 },  // Main Gate
        { x: 1311, y: 647},  // 🔴 Fake location (Hidden waypoint)
        { x: 1312, y: 675}   // Boys Hostel
    ],
    "Main Gate-Girls Hostel": [
        { x: 152, y: 655 },  // Main Gate
        { x: 289, y: 654},  // 🔴 Fake location (Hidden waypoint)
        { x: 294, y: 916}   // Girls Hostel
    ],
    "Main Gate-Canteen": [
        { x: 152,y:655},  // Main Gate
        { x: 853, y: 646 },  // 🔴 Fake location (Hidden waypoint)
        { x: 853, y: 435},  // 🔴 Fake location (Hidden waypoint)
        { x: 826, y: 431}   // Canteen
    ],
    "Main Gate-Playground": [
        { x: 152, y: 655 },  // Main Gate
        { x: 1016, y: 646},  // 🔴 Fake location (Hidden waypoint)
        { x: 1016, y: 627}   // Playground
    ],
    "Main Gate-BasketBall Ground": [
        { x: 152, y: 655 },  // Main Gate
        { x: 853, y: 646},  // 🔴 Fake location (Hidden waypoint)
        { x: 853, y: 314},  // 🔴 Fake location (Hidden waypoint)
        { x: 883, y: 310}   // BasketBall Ground
    ], 
    "Main Gate-Circket Net": [
        { x: 152, y: 655 },  // Main Gate
        { x: 854, y: 639},  // 🔴 Fake location (Hidden waypoint)
        { x: 851, y: 50},  // 🔴 Fake location (Hidden waypoint)
        { x: 1163, y: 37},  // 🔴 Fake location (Hidden waypoint)
        { x: 1175, y: 108},  // 🔴 Fake location (Hidden waypoint)
        { x: 1215,y:105}      //Circket Ne
    ],
     "Main Gate-Circket Ground": [
        { x: 152, y: 655 },  // Main Gate
        { x: 1442, y: 648},  // 🔴 Fake location (Hidden waypoint)
        { x: 1442, y: 613}   // Circket Ground
    ],
    "Main Gate-Stationary": [
        { x: 151, y: 653 },  // Main Gate 
        {x: 773, y: 652},  // 🔴 Fake location (Hidden waypoint)
        { x: 777, y: 738}   // Stationary and juice shop
    ],
    "Main Gate-Temple": [
        { x: 150, y: 654 },  // Main Gate
        { x: 578, y: 647},  // 🔴 Fake location (Hidden waypoint)
        { x: 578, y: 450}   // Gate-Temple
    ],
    "Main Gate-Bus parking": [
        { x: 144, y: 654 },  // Main Gate
        { x: 61, y: 659},  // 🔴 Fake location (Hidden waypoint)
        { x: 61, y: 802}   //Bus parking
    ],
    "Main Gate-Sports room": [
        { x: 152, y: 654 },  // Main Gate
        { x: 1294, y: 645},  // 🔴 Fake location (Hidden waypoint)
        { x: 1294, y: 583}   //Sport room
    ],
    
};

const predefinedPaths_B = {
    "B-Block-A-Block": [
        { x: 1008, y: 711 },  // B-Block
        { x:1008, y: 650 },  // 🔴 Fake location (Hidden waypoint)
        { x: 574, y: 640 }   // A-Block
    ],
    "B-Block-C-Block": [
        { x: 1008, y: 707 },  // B-Block
        { x: 1008, y: 645 },  // Hidden waypoint
        { x: 851, y: 644 },  // Hidden waypoint
        { x: 851, y: 516 } ,  // C-Block
        { x: 755, y: 504},  // 🔴 Fake location (Hidden waypoint)
        { x: 753, y: 430 },  // 🔴 Fake location (Hidden waypoint)
        { x: 594, y: 426 }, // 🔴 Fake location (Hidden waypoint)
        { x: 601, y: 397},  // 🔴 Fake location (Hidden waypoint)
        { x: 570, y: 392 },  // 🔴 Fake location (Hidden waypoint)
        { x: 570, y: 305 },  // 🔴 Fake location (Hidden waypoint)
        { x: 617, y: 287 }, // C-Block
        
    ],
    "B-Block-Main Gate": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 151, y: 649 }   // Main Gate
    ],
    "B-Block-Adimission": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650},  // Hidden waypoint
        { x: 289 ,y: 651},  // Hidden waypoint
        { x: 289 ,y: 433},  // Hidden waypoint
        { x: 263, y: 438},  // Adimission
    ],
    "B-Block-Boys Hostel": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650},  // Hidden waypoint
        { x: 1289, y: 647 },  // Hidden waypoint
        { x: 1289, y: 673}   // Boys Hostel
    ],
    "B-Block-Girls Hostel": [
        { x: 1008, y: 711},  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 289, y: 650 },  // Hidden waypoint
        { x: 289, y: 916 }   // Girls Hostel
    ],
    "B-Block-Canteen": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650},  // Hidden waypoint
        { x: 853, y: 644},  // Hidden waypoint
        { x: 853, y: 428},  // Hidden waypoint
        { x: 803, y: 411}   // Canteen  
    ],
    "B-Block-Playground": [
        { x: 1008, y: 711},  // B-Block
        { x: 1008, y: 630 }   // Playground
    ],
    "B-Block-BasketBall Ground": [
        { x: 982, y: 716 },  // B-Block
        { x: 977, y: 499 }   // BasketBall Ground
    ], 
    "B-Block-Cricket Net": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 853,  y: 644 },  // Hidden waypoint
        { x: 850,  y: 40 },  // Hidden waypoint
        { x: 1241, y: 48},  // Hidden waypoint
        { x: 1241, y: 85}   // Cricket Net
    ],
    "B-Block-Cricket Ground": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1439, y: 644 },  // Hidden waypoint
        { x: 1439, y: 618}   // Cricket Ground
    ],
    "B-Block-Stationary": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 767, y: 645 },  // Hidden waypoint
        { x: 784, y: 734}   // Stationary
    ],
    "B-Block-Temple": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 575, y: 642 },  // Hidden waypoint
        { x: 575, y: 445}   //Temple
    ],
    "B-Block-Bus parking": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1439, y: 644 },  // Hidden waypoint
        { x: 1439, y: 618}   //Bus parking
    ],
    "B-Block-Sports room": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1303, y: 645},  // Hidden waypoint
        { x: 1303, y: 581}   //Sports room
    ],
    "B-Block-Bus parking": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 63, y: 654},  // Hidden waypoint
        { x: 63, y: 795}   //Bus parking
    ],
    "B-Block-Auditoruim": [
        { x: 1008, y: 711 },  // B-Block
        { x: 1008, y: 650 },  // Hidden waypoint
        { x: 1181, y: 644},  // Hidden waypoint
        { x: 1181, y: 266}   //Auditoruim
    ],
};



// Extract query parameters
const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get("source");
const destination = urlParams.get("destination");

// Ensure canvas size matches image
const canvas = document.getElementById("mapCanvas");
const mapImage = document.getElementById("mapImage");

mapImage.onload = function() {
    canvas.width = mapImage.clientWidth;
    canvas.height = mapImage.clientHeight;
    drawRoute(source, destination);
};

function getPath(source, destination) {
    const key1 = `${source}-${destination}`;
    const key2 = `${source}-${destination}`;
    //let key2 = `${destination}-${source}`;
    return predefinedPaths[key1] || predefinedPaths_B[key2]  /*|| predefinedPaths[key2] || [];*/
}

function drawRoute(source, destination) {
    const waypoints = getPath(source, destination);
    if (waypoints.length === 0) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([5, 5]);  // Dotted line
    ctx.beginPath();

    waypoints.forEach((point, index) => {
        const x = (point.x / 1500) * canvas.width;
        const y = (point.y / 1000) * canvas.height;

        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
}
window.addEventListener("resize", drawRoute(source, destination));
window.onload = drawRoute(source, destination);

function goBack() {
    window.location.href = "index.html";
}

function cone(radius, height) {
    let totalArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));
    let area = Math.PI * Math.pow(radius, 2);
    let volume = area * height / 3;
    console.log(`volume = ${volume.toFixed(4)}\narea = ${totalArea.toFixed(4)}`);
}
cone(3,
    5
);
cone(3.3,
    7.8
);
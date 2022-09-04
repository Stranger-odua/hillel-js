import fs from 'fs';

const targetFolders = ['./public/assets/carousel', './public/assets/products'];

const getRandomPrice = (fromNum, toNum) => {
    return Number((Math.random() * (toNum - fromNum) + fromNum).toFixed(1)).toFixed(2);
};

const transformName = (name) => {
    const withoutFileType = Array.from(name.slice(0, -4));
    // first letter to uppercase
    withoutFileType.splice(0, 1, withoutFileType.at(0).toUpperCase());
    // join to one string
    return withoutFileType.join('').split('_').join(' ');
};


const createJSONDataBasedOnFilesInDirectories = (folders) => {
    const returnObject = {};

    folders.forEach((folder) => {
        const fileNames = fs.readdirSync(folder);
        const categoryName = folder.slice(folder.lastIndexOf('/') + 1);
        returnObject[categoryName] = [];

        fileNames.forEach((fileName, i) => {
            returnObject[categoryName].push({
                id: i,
                name: transformName(fileName),
                price: `€${ getRandomPrice(5, 30) }`,
                imagePath: `${ folder.slice(8) }/${ fileName }`,
                vegeterian: Math.random() > 0.5,
                nuts: Math.random() > 0.5,
                spiciness: Math.round((Math.random() * 100)) % 5,
                category: '',
            });
        });
    });

    return JSON.stringify(returnObject);
};

fs.writeFileSync('db.json', createJSONDataBasedOnFilesInDirectories(targetFolders));
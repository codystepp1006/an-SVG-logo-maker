
function generateSvg(data) {

   letters = data.text;
    if (data.shape == "square"){       

        console.log("we made it to square somehow");
        return '<svg version="1.1" width=""300" height="200" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="100%" height="100%" fill="' + data.shapecolor +'" />' +
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + data.textcolor +'">' + data.text + '</text></svg>'
        
    }
    if (data.shape == "circle"){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="150" cy="100" r= "80" fill="' + data.shapecolor +'" />' +
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + data.textcolor +'">' + data.text + ' </text></svg>'
        
    }
    if (data.shape == "triangle"){
        return  '<svg id="triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30%" height="30%" viewBox="0 0 100 100">'+
        '<polygon points="50 15, 100 100, 0 100" fill ="' + data.shapecolor +'" />' +
        '<text text-anchor="middle" x="50" y="75" fill="' + data.textcolor +'">' + data.text + '</text>' + ' </svg>'
                                            
        
    }


};

module.exports = generateSvg;
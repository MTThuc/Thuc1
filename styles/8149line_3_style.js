var size = 0;
var placement = 'point';
function categories_8149line_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,50,158,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '00 TB':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,170,205,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '010 Construction':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(74,203,78,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '100 Road Hard (edge) _ Duong Cung (mep)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(89,239,52,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '103 Kerb Top _ Dinh Le Duong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,105,218,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '104 Kerb Bottom _ Chan Le Duong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,98,112,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '107 Foot Path (Edge) _ Loi Di Bo (Mep)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,206,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '108 Barrier (Fixed) _ Rao Chan (Co Dinh)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(155,217,21,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '111 Road Sign _ Bien Bao Duong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,209,107,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '303 Power Line U-G _ Duong Day Dien Ngam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,123,217,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '311 Water Pipe U-G _ Ong Nuoc Ngam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,74,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '350 Sanitary Sewer Manhole _ Ho Ga Nuoc Thai':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,193,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '360 Stormwater Manhole _ Ho Ga Thoat Nuoc Mua':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(41,216,216,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '395 Stay Wire _ Cot Giu Day Cap':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,223,190,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '400 Building Wall':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(140,20,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '400 Building Wall _ Tuong Nha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(108,113,216,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '405 PileCap _ Mong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,30,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '421 Retention':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,126,223,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '800 Legal boundary':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,232,173,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '802 Boundary Mark (Existing) _ Diem Ranh Gioi (Hien Huu)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,132,71,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '835 Shelter _ Cho Tru':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(63,26,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '907 Wall Brick _ Tuong Gach':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(188,200,54,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '908 Wall Other _ Tuong Khac':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,116,155,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nnn Concrete Pad':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(42,91,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,192,75,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_8149line_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("LAYER");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_8149line_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

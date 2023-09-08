var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SW_2 = new ol.format.GeoJSON();
var features_SW_2 = format_SW_2.readFeatures(json_SW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SW_2.addFeatures(features_SW_2);
var lyr_SW_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SW_2, 
                style: style_SW_2,
                interactive: true,
                title: '<img src="styles/legend/SW_2.png" /> SW'
            });
var format_8149line_3 = new ol.format.GeoJSON();
var features_8149line_3 = format_8149line_3.readFeatures(json_8149line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8149line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8149line_3.addFeatures(features_8149line_3);
var lyr_8149line_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8149line_3, 
                style: style_8149line_3,
                interactive: true,
    title: '8149line<br />\
    <img src="styles/legend/8149line_3_0.png" /> 0<br />\
    <img src="styles/legend/8149line_3_1.png" /> 00 TB<br />\
    <img src="styles/legend/8149line_3_2.png" /> 010 Construction<br />\
    <img src="styles/legend/8149line_3_3.png" /> 100 Road Hard (edge) _ Duong Cung (mep)<br />\
    <img src="styles/legend/8149line_3_4.png" /> 103 Kerb Top _ Dinh Le Duong<br />\
    <img src="styles/legend/8149line_3_5.png" /> 104 Kerb Bottom _ Chan Le Duong<br />\
    <img src="styles/legend/8149line_3_6.png" /> 107 Foot Path (Edge) _ Loi Di Bo (Mep)<br />\
    <img src="styles/legend/8149line_3_7.png" /> 108 Barrier (Fixed) _ Rao Chan (Co Dinh)<br />\
    <img src="styles/legend/8149line_3_8.png" /> 111 Road Sign _ Bien Bao Duong<br />\
    <img src="styles/legend/8149line_3_9.png" /> 303 Power Line U-G _ Duong Day Dien Ngam<br />\
    <img src="styles/legend/8149line_3_10.png" /> 311 Water Pipe U-G _ Ong Nuoc Ngam<br />\
    <img src="styles/legend/8149line_3_11.png" /> 350 Sanitary Sewer Manhole _ Ho Ga Nuoc Thai<br />\
    <img src="styles/legend/8149line_3_12.png" /> 360 Stormwater Manhole _ Ho Ga Thoat Nuoc Mua<br />\
    <img src="styles/legend/8149line_3_13.png" /> 395 Stay Wire _ Cot Giu Day Cap<br />\
    <img src="styles/legend/8149line_3_14.png" /> 400 Building Wall<br />\
    <img src="styles/legend/8149line_3_15.png" /> 400 Building Wall _ Tuong Nha<br />\
    <img src="styles/legend/8149line_3_16.png" /> 405 PileCap _ Mong<br />\
    <img src="styles/legend/8149line_3_17.png" /> 421 Retention<br />\
    <img src="styles/legend/8149line_3_18.png" /> 800 Legal boundary<br />\
    <img src="styles/legend/8149line_3_19.png" /> 802 Boundary Mark (Existing) _ Diem Ranh Gioi (Hien Huu)<br />\
    <img src="styles/legend/8149line_3_20.png" /> 835 Shelter _ Cho Tru<br />\
    <img src="styles/legend/8149line_3_21.png" /> 907 Wall Brick _ Tuong Gach<br />\
    <img src="styles/legend/8149line_3_22.png" /> 908 Wall Other _ Tuong Khac<br />\
    <img src="styles/legend/8149line_3_23.png" /> nnn Concrete Pad<br />\
    <img src="styles/legend/8149line_3_24.png" /> <br />'
        });
var format_8149TEXT_4 = new ol.format.GeoJSON();
var features_8149TEXT_4 = format_8149TEXT_4.readFeatures(json_8149TEXT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8149TEXT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8149TEXT_4.addFeatures(features_8149TEXT_4);
var lyr_8149TEXT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8149TEXT_4, 
                style: style_8149TEXT_4,
                interactive: true,
                title: '<img src="styles/legend/8149TEXT_4.png" /> 8149 TEXT'
            });
var format_PL_5 = new ol.format.GeoJSON();
var features_PL_5 = format_PL_5.readFeatures(json_PL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_5.addFeatures(features_PL_5);
var lyr_PL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL_5, 
                style: style_PL_5,
                interactive: true,
                title: '<img src="styles/legend/PL_5.png" /> PL'
            });
var format_PP_6 = new ol.format.GeoJSON();
var features_PP_6 = format_PP_6.readFeatures(json_PP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP_6.addFeatures(features_PP_6);
var lyr_PP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PP_6, 
                style: style_PP_6,
                interactive: true,
                title: '<img src="styles/legend/PP_6.png" /> PP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_SW_2.setVisible(true);lyr_8149line_3.setVisible(true);lyr_8149TEXT_4.setVisible(true);lyr_PL_5.setVisible(true);lyr_PP_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_SW_2,lyr_8149line_3,lyr_8149TEXT_4,lyr_PL_5,lyr_PP_6];
lyr_SW_2.set('fieldAliases', {'name': 'name', 'photo': 'photo', 'MATERIAL': 'MATERIAL', 'DEST': 'DEST', });
lyr_8149line_3.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_8149TEXT_4.set('fieldAliases', {'TEXTSTRING': 'TEXTSTRING', 'TEXT_SIZE': 'TEXT_SIZE', 'TEXT_ANGLE': 'TEXT_ANGLE', });
lyr_PL_5.set('fieldAliases', {'NAME': 'NAME', 'PHOTO': 'PHOTO', 'MATERIAL': 'MATERIAL', 'DEST': 'DEST', });
lyr_PP_6.set('fieldAliases', {'NAME': 'NAME', 'PHOTO': 'PHOTO', 'MATERIAL': 'MATERIAL', 'DEST': 'DEST', });
lyr_SW_2.set('fieldImages', {'name': 'TextEdit', 'photo': 'ExternalResource', 'MATERIAL': 'TextEdit', 'DEST': 'TextEdit', });
lyr_8149line_3.set('fieldImages', {'LAYER': '', });
lyr_8149TEXT_4.set('fieldImages', {'TEXTSTRING': 'TextEdit', 'TEXT_SIZE': 'TextEdit', 'TEXT_ANGLE': 'TextEdit', });
lyr_PL_5.set('fieldImages', {'NAME': 'TextEdit', 'PHOTO': 'ExternalResource', 'MATERIAL': 'TextEdit', 'DEST': 'TextEdit', });
lyr_PP_6.set('fieldImages', {'NAME': 'TextEdit', 'PHOTO': 'ExternalResource', 'MATERIAL': 'TextEdit', 'DEST': 'TextEdit', });
lyr_SW_2.set('fieldLabels', {'name': 'header label', 'photo': 'header label', 'MATERIAL': 'inline label', 'DEST': 'inline label', });
lyr_8149line_3.set('fieldLabels', {'LAYER': 'no label', });
lyr_8149TEXT_4.set('fieldLabels', {'TEXTSTRING': 'no label', 'TEXT_SIZE': 'no label', 'TEXT_ANGLE': 'no label', });
lyr_PL_5.set('fieldLabels', {'NAME': 'inline label', 'PHOTO': 'no label', 'MATERIAL': 'inline label', 'DEST': 'no label', });
lyr_PP_6.set('fieldLabels', {'NAME': 'header label', 'PHOTO': 'inline label', 'MATERIAL': 'no label', 'DEST': 'no label', });
lyr_PP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
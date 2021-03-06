var selected_country = "WORLD";

var dataWhole = $.get("/coffee/worldmap/load_maps", function( data ){
    var countries = data.map(function(a) {return a.id;});
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    var worldData = data.find(x => x.id === "WORLD").data;
    console.log(data);
    chart.data = worldData;

    // create title
    var title = chart.titles.create();
    title.text = "ICO World Trade Statistics";
    title.fontSize = 40;
    title.fontFamily = "Helvetica Neue"
    title.marginBottom = 30;
    title.align = "center"

    // create axis
    var yearAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    yearAxis.title.text = "Year";
    yearAxis.dataFields.category = "year";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "60 kg bags of coffee beans"
    // TODO: set minimum to be -4500

    var productionSeries = chart.series.push(new am4charts.LineSeries());
    productionSeries.fill = "#333989"
    productionSeries.stroke = "#333989"
    productionSeries.name = "Production";
    productionSeries.dataFields.valueY = "Production";
    productionSeries.dataFields.categoryX = "year";
    productionSeries.bullets.push(new am4charts.CircleBullet());
    productionSeries.minBulletDistance = 15;
    // tooltip
    productionSeries.tooltipText = "{Production}";
    // Drop-shaped tooltips
    productionSeries.tooltip.background.cornerRadius = 20;
    productionSeries.tooltip.background.strokeOpacity = 0;
    productionSeries.tooltip.pointerOrientation = "vertical";
    productionSeries.tooltip.label.minWidth = 40;
    productionSeries.tooltip.label.minHeight = 40;
    productionSeries.tooltip.label.textAlign = "middle";
    productionSeries.tooltip.label.textValign = "middle";

    var exportSeries = chart.series.push(new am4charts.LineSeries());
    exportSeries.fill = "#7ab30b"
    exportSeries.stroke = "#7ab30b"
    exportSeries.name = "Exports";
    exportSeries.dataFields.valueY = "Exports";
    exportSeries.dataFields.categoryX = "year";
    exportSeries.bullets.push(new am4charts.CircleBullet());
    exportSeries.minBulletDistance = 15;
    // tooltip
    exportSeries.tooltipText = "{Exports}";
    // Drop-shaped tooltips
    exportSeries.tooltip.background.cornerRadius = 20;
    exportSeries.tooltip.background.strokeOpacity = 0;
    exportSeries.tooltip.pointerOrientation = "vertical";
    exportSeries.tooltip.label.minWidth = 40;
    exportSeries.tooltip.label.minHeight = 40;
    exportSeries.tooltip.label.textAlign = "middle";
    exportSeries.tooltip.label.textValign = "middle";

    var domesticConsumptionSeries = chart.series.push(new am4charts.LineSeries());
    domesticConsumptionSeries.fill = "#0283AF"
    domesticConsumptionSeries.stroke = "#0283AF"
    domesticConsumptionSeries.name = "Domestic Consumption";
    domesticConsumptionSeries.dataFields.valueY = "DomesticConsumption";
    domesticConsumptionSeries.dataFields.categoryX = "year";
    domesticConsumptionSeries.bullets.push(new am4charts.CircleBullet());
    domesticConsumptionSeries.minBulletDistance = 15;
    // tooltip
    domesticConsumptionSeries.tooltipText = "{DomesticConsumption}";
    // Drop-shaped tooltips
    domesticConsumptionSeries.tooltip.background.cornerRadius = 20;
    domesticConsumptionSeries.tooltip.background.strokeOpacity = 0;
    domesticConsumptionSeries.tooltip.pointerOrientation = "vertical";
    domesticConsumptionSeries.tooltip.label.minWidth = 40;
    domesticConsumptionSeries.tooltip.label.minHeight = 40;
    domesticConsumptionSeries.tooltip.label.textAlign = "middle";
    domesticConsumptionSeries.tooltip.label.textValign = "middle";

    var importsSeries = chart.series.push(new am4charts.LineSeries());
    importsSeries.fill = "#EE7F00"
    importsSeries.stroke = "#EE7F00"
    importsSeries.name = "Imports";
    importsSeries.dataFields.valueY = "Imports";
    importsSeries.dataFields.categoryX = "year";
    importsSeries.bullets.push(new am4charts.CircleBullet());
    importsSeries.minBulletDistance = 15;
    // tooltip
    importsSeries.tooltipText = "{Imports}";
    // Drop-shaped tooltips
    importsSeries.tooltip.background.cornerRadius = 20;
    importsSeries.tooltip.background.strokeOpacity = 0;
    importsSeries.tooltip.pointerOrientation = "vertical";
    importsSeries.tooltip.label.minWidth = 40;
    importsSeries.tooltip.label.minHeight = 40;
    importsSeries.tooltip.label.textAlign = "middle";
    importsSeries.tooltip.label.textValign = "middle";

    var disappearanceSeries = chart.series.push(new am4charts.LineSeries());
    disappearanceSeries.fill = "#B7016A"
    disappearanceSeries.stroke = "#B7016A"
    disappearanceSeries.name = "Disappearance";
    disappearanceSeries.dataFields.valueY = "Disappearance";
    disappearanceSeries.dataFields.categoryX = "year";
    disappearanceSeries.bullets.push(new am4charts.CircleBullet());
    disappearanceSeries.minBulletDistance = 15;
    // tooltip
    disappearanceSeries.tooltipText = "{Disappearance}";
    // Drop-shaped tooltips
    disappearanceSeries.tooltip.background.cornerRadius = 20;
    disappearanceSeries.tooltip.background.strokeOpacity = 0;
    disappearanceSeries.tooltip.pointerOrientation = "vertical";
    disappearanceSeries.tooltip.label.minWidth = 40;
    disappearanceSeries.tooltip.label.minHeight = 40;
    disappearanceSeries.tooltip.label.textAlign = "middle";
    disappearanceSeries.tooltip.label.textValign = "middle";

    var netImportsSeries = chart.series.push(new am4charts.LineSeries());
    netImportsSeries.fill = "#015430"
    netImportsSeries.stroke = "#015430"
    netImportsSeries.name = "Net Imports";
    netImportsSeries.dataFields.valueY = "NetImports";
    netImportsSeries.dataFields.categoryX = "year";
    netImportsSeries.bullets.push(new am4charts.CircleBullet());
    netImportsSeries.minBulletDistance = 15;
    // tooltip
    netImportsSeries.tooltipText = "{NetImports}";
    // Drop-shaped tooltips
    netImportsSeries.tooltip.background.cornerRadius = 20;
    netImportsSeries.tooltip.background.strokeOpacity = 0;
    netImportsSeries.tooltip.pointerOrientation = "vertical";
    netImportsSeries.tooltip.label.minWidth = 40;
    netImportsSeries.tooltip.label.minHeight = 40;
    netImportsSeries.tooltip.label.textAlign = "middle";
    netImportsSeries.tooltip.label.textValign = "middle";

    var reExportsSeries = chart.series.push(new am4charts.LineSeries());
    reExportsSeries.fill = "#DC0112"
    reExportsSeries.stroke = "#DC0112"
    reExportsSeries.name = "Re-Imports";
    reExportsSeries.dataFields.valueY = "ReImports";
    reExportsSeries.dataFields.categoryX = "year";
    reExportsSeries.bullets.push(new am4charts.CircleBullet());
    reExportsSeries.minBulletDistance = 15;
    // tooltip
    reExportsSeries.tooltipText = "{ReImports}";
    // Drop-shaped tooltips
    reExportsSeries.tooltip.background.cornerRadius = 20;
    reExportsSeries.tooltip.background.strokeOpacity = 0;
    reExportsSeries.tooltip.pointerOrientation = "vertical";
    reExportsSeries.tooltip.label.minWidth = 40;
    reExportsSeries.tooltip.label.minHeight = 40;
    reExportsSeries.tooltip.label.textAlign = "middle";
    reExportsSeries.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    var bullet = productionSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();

    // LEGEND
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    var marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");




    // Create map instance
    var map = am4core.create("mapdiv", am4maps.MapChart);
    // Set map definition
    map.geodata = am4geodata_worldLow;
    // Set projection
    map.projection = new am4maps.projections.Miller();
    // Create map polygon series
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#A9A9A9");
    polygonTemplate.strokeWidth = 0.2;
    polygonTemplate.stroke = am4core.color("#f9f9f9");

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#355824");

    // Only include countries in the map that there is data for
    var countries = [];
    for (var i in data) {
        var id = data[i].id
        if (!id || id == "WORLD") {continue;}
        countries.push(id);
    }
    polygonSeries.include = countries;

    polygonTemplate.events.on("hit", function(ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
        var countryAlpha2 = ev.target.dataItem.dataContext.id;
        // console.log(countryAlpha2);
        var hitData = data.find(x => x.id === countryAlpha2);
        selected_country = hitData.country
        console.log(selected_country);
        title.text = "ICO " + selected_country + " Trade Statistics"
        chart.data = hitData.data;
    });

    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.align = "right";
    map.zoomControl.marginRight = 5;
    map.zoomControl.slider.height = 100;
    map.zoomControl.marginBottom = "10%";

    var button = map.chartContainer.createChild(am4core.Button);
    button.padding(5, 5, 5, 5);
    button.width = 20;
    button.align = "right";
    button.marginRight = 15;
    button.events.on("hit", function() {
        chart.data = worldData;
        title.text = "ICO World Trade Statistics"
        map.goHome();
    });
    button.icon = new am4core.Sprite();
    button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
});


// button for downloading files
document.getElementById("export").onclick = function () {
    var parameters = { country_name: selected_country};
    $.post('/coffee/worldmap/download', parameters);
};

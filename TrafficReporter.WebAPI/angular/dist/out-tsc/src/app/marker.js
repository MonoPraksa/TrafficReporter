"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Markers = /** @class */ (function () {
    function Markers(causesService) {
        this.causesService = causesService;
    }
    // Add a new marker to map (as described in report)
    Markers.prototype.create = function (map, report) {
        var pos = { lat: report.Lattitude, lng: report.Longitude };
        //console.log('Cause:'+Math.log2(report.Cause));console.log('Rating:'+report.Rating);
        var image = { url: this.causesService.causes[Math.log2(report.Cause)].IconUri, scaledSize: new google.maps.Size(40, 40) };
        Markers.Collection[Markers.Collection.length] = new google.maps.Marker({
            position: pos,
            map: map,
            icon: image
        });
    };
    Markers.prototype.current = function (map, pos) {
        Markers.Collection[Markers.Collection.length] = new google.maps.Marker({
            position: pos,
            map: map,
        });
    };
    // Remove all markers from the map
    Markers.prototype.empty = function () {
        Markers.Collection.forEach(function (marker) {
            marker.setMap(null);
        });
        Markers.Collection = []; // 
    };
    Markers.Collection = [];
    return Markers;
}());
exports.Markers = Markers;
//# sourceMappingURL=marker.js.map
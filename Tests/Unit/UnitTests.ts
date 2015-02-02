/// <reference path="qunit.d.ts" />
/// <reference path="common.ts" />
///<reference path='../../src/Extensions.ts' />
///<reference path='../../src/Maths.ts' />
///<reference path='../../src/TypeViz.ts' />
///<reference path='../../src/Animation.ts' />
///<reference path='../../src/SVG.ts' />
///<reference path='../../src/Arrays.ts' />
///<reference path='../../src/Scale.ts' />
///<reference path='../../Diagram/Diagram.ts' />
module UnitTests{
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Utilities tests");
 


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("UndoRedo tests");
  

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Canvas tests");
   

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Rectangle tests");
   
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Marker tests");
  

   
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Rect tests");
   

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Color tests");
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Diagram tests");
   


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("XML Loading tests");

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    QUnit.module("Array tests");


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   

    test("Grow", function () {
        var points = [1, 2, 3, 4];
        if (points == null || points.length == 0) return;
        if (points.length == 1) this.Points = points;

        var states = [];
        states.push([].Initialize(points[0], points.length));
        for (var i = points.length - 1; i > 0; i--) {
            var state = [].Initialize(points[0], points.length);
            for (var j = i; j < points.length; j++) {
                state[j] = points[j - i + 1];
            }
            states.push(state);
        }
        equal(states.length, points.length);
    });

    test("LinearScale", function () {
        var scaler = new LinearScale([0, 10], [0, 20]);
        deepEqual(scaler.Domain, [0, 10]);
        deepEqual(scaler.Range, [0, 20]);
        equal(scaler.scale(0), 0);

    });
}
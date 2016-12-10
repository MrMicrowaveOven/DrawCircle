# DrawCircle

This is the result of a simple challenge given to me.  If you can draw a point on a canvas, how would you go about drawing a circle?

You can view the app [here](https://mrmicrowaveoven.github.io/DrawCircle/).

The first strategy was to convert canvas coordinates (where [0,0] is the top-left corner and all coordinates are positive) to cartesian coordinates (four quadrants with [0,0] at the center).  This was done in `carte_to_canvas`, which makes reflecting parts of the circle much simpler.

From there I calibrated my `draw_point` function into cartesian coordinates, and used the Pythagorion Theorem (in the form of the Distance Formula) to find corresponding y-coordinates given a set of x-coordinates.  This was only used for 1/8th of the circle (then reflected from there) for several reasons (see `get_y_coordinate`).  One good reason to not calculate every point is speed.  Computers are surprisingly slow at calculating square-roots, so the less calculations in this field the better.

I will be implementing a UI soon, so the user can enter a Center and Radius and the circle will draw (perhaps even with animation).  Feel free to contact me if you have any further ideas.

## draw_circle(center, radius)

Draws a circle with the given center and radius using draw_point.

## index.html

A basic HTMLCanvas with my axes and a sample circle.

## carte_to_canvas(x,y)

This makes a convenient conversion from cartesian coordinates on the plane into canvas coordinates.  This allows the other functions to be used with respect to the axes.

## draw_point(x,y)

Draws a single point, using carte_to_canvas so cartesian coordinates may be used.

## draw_axis(originX, originY)

Draws a set of axes centered at the origin provided, complete with gridlines.  Note that due to draw_circle dependency, there shouldn't be more than one set of axes on one canvas.

## get_y_coordinate(x, radius)

Used to calculate the corresponding y-coordinate for each x-coordinate.  This should only be used in the parts of the circle that are less 'steep' (-1 < rate of change < 1).  Otherwise there will be holes, since there will be more than one y-coordinate to each x-coordinate.  For this reason I would use `get_y_coordinate` to find 1/8th of the points on the circle, then reflect from there.

## draw_first_quarter(center, radius)

Draws an eighth of the circle, then reverses the coordinates to get another eighth in the reflection, for a total of a quarter-circle.

## draw_second_quarter(center, radius)

Draws a horizontal reflection of the first quarter.

## draw_second_half(center, radius)

Draws a vertical reflection of the first half.

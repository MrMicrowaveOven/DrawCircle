# draw_circle(center, radius)

Draws a circle using draw_point.

# index.html

A basic HTMLCanvas with my axes and a sample circle.

## carte_to_canvas(x,y)

This makes a convenient conversion from cartesian coordinates on the plane into canvas coordinates.  This allows the other functions to be used with respect to the axes.

## draw_point(x,y)

Draws a single point, using carte_to_canvas so cartesian coordinates may be used.

## draw_axis(originX, originY)

Draws a set of axes centered at the origin provided, complete with gridlines.  Note that due to draw_circle dependency, there shouldn't be more than one set of axes on one canvas.

## get_y_coordinate(x, radius)

Used to calculate the corresponding y-coordinate for each x-coordinate.

## draw_first_quarter(center, radius)

Draws an eighth of the circle, then reverses the coordinates to get another eighth in the reflection, for a total of a quarter-circle.

## draw_second_quarter(center, radius)

Draws a horizontal reflection of the first quarter.

## draw_second_half(center, radius)

Draws a vertical reflection of the first half.

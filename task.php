<?php

function countArray($min, $max, $length)
{
    for ($i = 0; $i < $max; $i++) {
        $arr[] = mt_rand($min, $max);
    }

    $groups = array_chunk($arr, $length);

    for ($i = 0; $i < sizeof($groups); $i++) {
        //count the sum of array
        $sum = 0;
        for ($j = 0; $j < sizeof($groups[$i]); $j++) {
            $sum += $groups[$i][$j];
        }

        //count the average
        $average = $sum / count($groups[$i]);

        //get the minimum value
        $min = $groups[$i][0];
        for ($j = 0; $j < sizeof($groups[$i]); $j++) {
            if ($groups[$i][$j] < $min) {
                $min = $groups[$i][$j];
            }
        }

        //get the maximum value
        $max = $groups[$i][0];
        for ($j = 0; $j < sizeof($groups[$i]); $j++) {
            if ($groups[$i][$j] > $max) {
                $max = $groups[$i][$j];
            }
        }

        echo "Array grup index ke-" . $i . " \n";
        echo implode(", ", $groups[$i]);
        echo " \n";
        echo "sum: " . $sum . ", average: " . $average . ", min: " . $min . ", max: " . $max . " \n\n";
    }
}

countArray(0, 100, 25);

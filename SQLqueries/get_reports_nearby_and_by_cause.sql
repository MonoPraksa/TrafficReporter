SELECT id
FROM (SELECT id FROM trafreport
 WHERE cause = 8 AND calculate_distance(18.7669319778721, 45.6194566473373, longitude, lattitude)  < (SELECT cause_range FROM cause_table WHERE id = 4)) AS id

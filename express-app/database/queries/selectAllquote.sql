SELECT quotations.id,
    origins.id AS origin_id, origins.code AS origin_code, origins.city AS origin_city,
    destinations.id AS dest_id, destinations.code AS dest_code, destinations.city AS dest_city,
    depart_date, return_date, passengers.*, price, is_order
FROM quotations
    JOIN passengers ON passenger_id = passengers.id
    LEFT JOIN cities AS destinations ON destinations.id = destination
    LEFT JOIN cities AS origins ON origins.id = origin;




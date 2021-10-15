select "releaseYear",
"categories"."name" as "category"
from "filmCategory"
join "films" using ("filmId")
join "categories" using ("categoryId")
where "title" = 'Boogie Amelie';

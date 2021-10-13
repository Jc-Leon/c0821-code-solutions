select "customers"."firstName",
        "customers"."lastName",
        sum("amount") as "paid"
from "payments"
join "customers" using ("customerId")
group by "customers"."customerId"
order by "paid" desc;

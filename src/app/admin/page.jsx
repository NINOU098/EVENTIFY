import React from "react";
import Styles from "./admin.module.css";
import Link from "next/link";
import TableEvents from "@/components/tableEvents/TableEvents";

const pageAdmin = () => {
	return (
		<div className={Styles.container}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h1 style={{ fontSize: "1.5rem" }}>
					ADMIN PAGE  - EVENTS LIST :
				</h1>
				<Link href="/admin/addEvent" className={Styles.button}>
					ADD EVENT :
				</Link>
			</div>
			<TableEvents />
		</div>
	);
};

export default pageAdmin;

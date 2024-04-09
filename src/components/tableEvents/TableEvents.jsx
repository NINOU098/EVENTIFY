
import React from "react";
import Styles from "./tableEvents.module.css";
import Image from "next/image";
import RemoveBtn from "@/components/removeBtn/RemoveBtn";

const TableEvents = async () => {
	const getEvents = async () => {
		try {
			const res = await fetch("http://localhost:3000/api/events", {
				cache: "no-store",
			});

			if (!res.ok) {
				throw new Error("Erreur lors du fetching events");
			}
			const data = await res.json();
			return data.events;
		} catch (error) {
			console.log("Error loading events : ", error);
		}
	};
	const events = await getEvents();

	return (
		<>
			<table className={Styles.table}>
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Date</th>
						<th>Place</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{events?.map((element) => (
						<tr key={element._id}>
							<td>
								<div style={{ display: "flex", gap: "5px" }}>
									<Image
										src={`/events/${element.img || "noimg.jpg"}`}
										alt={element.alt}
										width={50}
										height={50}
										style={{ borderRadius: "10px" }}
									/>
									{element.title}
								</div>
							</td>
							<td>{element.description}</td>
							<td>{element.date}</td>
							<td>{element.place}</td>
							<td>
								<RemoveBtn id={element._id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TableEvents;

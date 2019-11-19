import React, { useState, useEffect } from "react";
import "bootstrap";
import "../styles/index.scss";

export const Seccounter = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => { 
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	let counter = ("" + seconds).split("");

	if (counter.length === 1) {
		return (
			<div className="container mt-5">
				<div className="card-deck">
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<div className="card-body">
							<i
								className="far fa-clock mt-5"
								style={{ fontSize: "10rem" }}
							/>
						</div>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							0
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							0
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							0
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[0]}
						</h2>
					</div>
				</div>
			</div>
		);
	} else if (counter.length === 2) {
		return (
			<div className="container mt-5">
				<div className="card-deck">
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<div className="card-body">
							<i
								className="far fa-clock mt-5"
								style={{ fontSize: "10rem" }}
							/>
						</div>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							0
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							0
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[0]}
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[1]}
						</h2>
					</div>
				</div>
			</div>
		);
	} else if (counter.length === 3) {
		return (
			<div className="container mt-5">
				<div className="card-deck">
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<div className="card-body">
							<i
								className="far fa-clock mt-5"
								style={{ fontSize: "10rem" }}
							/>
						</div>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							0
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[0]}
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[1]}
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[2]}
						</h2>
					</div>
				</div>
			</div>
		);
	} else if (counter.length === 4) {
		return (
			<div className="container mt-5">
				<div className="card-deck">
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<div className="card-body">
							<i
								className="far fa-clock mt-5"
								style={{ fontSize: "10rem" }}
							/>
						</div>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "8rem" }}>
							{counter[0]}
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "7rem" }}>
							{counter[1]}
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10rem" }}>
						<h2 className="card-title" style={{ fontSize: "7rem" }}>
							{counter[2]}
						</h2>
					</div>
					<div
						className="card text-center"
						style={{ height: "10 rem" }}>
						<h2 className="card-title" style={{ fontSize: "7rem" }}>
							{counter[3]}
						</h2>
					</div>
				</div>
			</div>
		);
	}
};

import React from 'react';

export default function index() {
	return (
		// Header
		<div className="header">
			<div className="container-fluid">
				{/* Body */}
				<div className="header-body">
					<div className="row align-items-end">
						<div className="col">
							{/* Pretitle */}
							<h6 className="header-pretitle">Overview</h6>

							{/* Title */}
							<h1 className="header-title">Dashboard</h1>
						</div>
						<div className="col-auto">
							{/* Button */}
							<a href="#!" className="btn btn-primary lift">
								Create Report
							</a>
						</div>
					</div>
					{/* End row */}
				</div>
				{/* End .header-body */}
			</div>
			{/* End .header */}
		</div>
	);
}

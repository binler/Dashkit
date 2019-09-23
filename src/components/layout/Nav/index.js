import React from 'react';
import Logo from 'assets/logo.svg';
import Avatar from 'assets/img/avatar.jpg';
import { Home, Search, Bell } from 'react-feather';

export default function index() {
	return (
		<nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light">
			<div className="container-fluid">
				{/* Toggler */}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#sidebarCollapse"
					aria-controls="sidebarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Brand  */}
				<a className="navbar-brand" href="index.html">
					<img src={Logo} className="navbar-brand-img mx-auto" alt="logo" />
				</a>

				{/* User (xs) */}
				<div className="navbar-user d-md-none">
					{/* Dropdown */}
					<div className="dropdown">
						{/* Toggle */}
						<a
							href="/local"
							id="sidebarSmallIcon"
							className="dropdown-toggle"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<div className="avatar avatar-sm avatar-online">
								<img
									src={Avatar}
									className="avatar-img rounded-circle"
									alt="..."
								/>
							</div>
						</a>

						{/* Menu */}
						<div
							className="dropdown-menu dropdown-menu-right"
							aria-labelledby="sidebarSmallIcon"
						>
							<a href="profile-posts.html" className="dropdown-item">
								Profile
							</a>
							<a href="settings.html" className="dropdown-item">
								Settings
							</a>
							<hr className="dropdown-divider" />
							<a href="sign-in.html" className="dropdown-item">
								Logout
							</a>
						</div>
					</div>
				</div>

				<div className="collapse navbar-collapse" id="sidebarCollapse">
					{/* Form */}
					<form className="mt-4 mb-3 d-md-none">
						<div className="input-group input-group-rounded input-group-merge">
							<input
								type="search"
								className="form-control form-control-rounded form-control-prepended"
								placeholder="Search"
								aria-label="Search"
							/>
							>
							<div className="input-group-prepend">
								<div className="input-group-text">
									<span className="fe fe-search"></span>
								</div>
							</div>
						</div>
					</form>

					{/* Navigation */}
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link collapsed"
								href="#sidebarDashboards"
								data-toggle="collapse"
								role="button"
								aria-expanded="false"
								aria-controls="sidebarDashboards"
							>
								<Home className="fe" size={20}/> Dashboards
							</a>
							<div className="collapse" id="sidebarDashboards">
								<ul className="nav nav-sm flex-column">
									<li className="nav-item">
										<a href="index.html" className="nav-link ">
											Default
										</a>
									</li>
									<li className="nav-item">
										<a href="dashboard-alt.html" className="nav-link active">
											Alternative
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-item d-md-none">
							<a
								className="nav-link"
								href="#sidebarModalActivity"
								data-toggle="modal"
							>
								<Bell size={20} /> Notifications
							</a>
						</li>
					</ul>

					{/* Push content down */}
					<div className="mt-auto"></div>

					{/* Customize */}
					<a
						href="#modalDemo"
						className="btn btn-block btn-primary mb-4"
						data-toggle="modal"
					>
						<i className="fe fe-sliders mr-2"></i> Customize
					</a>

					{/* User (md) */}
					<div className="navbar-user d-none d-md-flex" id="sidebarUser">
						{/* Icon */}
						<a
							href="#sidebarModalActivity"
							className="navbar-user-link"
							data-toggle="modal"
						>
							<span className="icon">
								<Bell size={20} />
							</span>
						</a>

						{/* Dropup */}
						<div className="dropup">
							{/* Toggle */}
							<a
								href="#s"
								id="sidebarIconCopy"
								className="dropdown-toggle"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<div className="avatar avatar-sm avatar-online">
									<img
										src={Avatar}
										className="avatar-img rounded-circle"
										alt="..."
									/>
								</div>
							</a>

							{/* Menu */}
							<div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
								<a href="profile-posts.html" className="dropdown-item">
									Profile
								</a>
								<a href="settings.html" className="dropdown-item">
									Settings
								</a>
								<hr className="dropdown-divider" />
								<a href="sign-in.html" className="dropdown-item">
									Logout
								</a>
							</div>
						</div>

						{/* Icon */}
						<a
							href="#sidebarModalSearch"
							className="navbar-user-link"
							data-toggle="modal"
						>
							<span className="icon">
								<Search size={20} />
							</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

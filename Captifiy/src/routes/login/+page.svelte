<script>
	import ellipse2 from "../../assets/images/ellipse2.svg";
	import logo_white from "../../assets/images/logo-white.svg";
	import icon_google from "../../assets/images/icon-google.png";
	import icon_outlook from "../../assets/images/icon-outlook.png";
	import icon_linkedin from "../../assets/images/icon-linkedin.png";
	import { authHandlers, authStore } from "../../stores/authStore";
	let email = "";
	let password = "";
	async function handleSubmit() {
		console.log("trying to login");
		if (email && password) {
			try {
				await authHandlers.login(email, password);
				console.log("succesful");
			} catch (err) {
				console.log(err);
			}
		}
		if ($authStore.currentUser) {
			window.location.href = "/privateProfile";
		}
	}
</script>

<div class="flex h-full w-full justify-center">
	<div class="logindiv">
		<img class="ellipse2" src={ellipse2} alt="ellipse2" />
		<form class="login-form" on:submit={handleSubmit}>
			<div class="login-form-header">Login</div>
			<img
				class="form-logo hover:transform hover:scale-110 hover:-rotate-6 transition"
				src={logo_white}
				alt="logo"
				srcset=""
			/>
			<input
				bind:value={email}
				type="email"
				name="email"
				placeholder="   Email"
				id="email"
				required
			/>
			<input
				bind:value={password}
				type="password"
				name="password"
				placeholder="   Password"
				id="password"
				required
			/>
			<div class="forgot-text">
				<span>Dont have an account? </span><a href="signup"
					><span class="colored-text">Sign-up</span>
				</a>
			</div>
			<button
				type="submit"
				class="bg-indigo-500 text-xl text-white p-1 px-10 mt-6 rounded hover:bg-indigo-700 transition"
				>Login</button
			>
			<div class="separator">
				<hr class="hr-left" />
				<span class="sep-text">Sign up with</span>
				<hr class="hr-right" />
			</div>
			<div class="signup-logos">
				<a href="/"><img src={icon_outlook} alt="outlook" srcset="" /></a>
				<a href="/"><img src={icon_google} alt="google" srcset="" /></a>
				<a href="/"><img src={icon_linkedin} alt="linkedin" srcset="" /></a>
			</div>
		</form>
	</div>
</div>

<style>
	.logindiv {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		color: black;
	}

	.login-form > input {
		padding: 10px;
	}

	.ellipse2 {
		position: absolute;
		bottom: 0;
		width: 70%;
	}

	.login-form {
		height: 600px;
		width: 500px;
		margin-bottom: 150px;
		border-radius: 20px;
		background-color: #313131;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.login-form-header {
		width: 100%;
		height: 70px;
		color: white;
		font-size: 36px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #5a7fff;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.form-logo {
		width: 60px;
		margin-top: 20px;
	}

	#email,
	#password {
		margin-top: 20px;
		width: 400px;
		height: 40px;
		border-radius: 10px;
		border-color: #5a7fff;
	}

	#email {
		margin-top: 40px;
	}

	.forgot-text {
		font-weight: bold;
		margin-top: 30px;
		color: white;
	}

	.colored-text {
		color: #5a7fff;
	}

	/* .btn-login {
		background-color: #5a7fff;
		border: none;
		cursor: pointer;
		padding: 10px 60px;
		border-radius: 5px;
		margin-top: 30px;
	} */

	.separator {
		display: flex;
		font-size: 18px;
		font-weight: bold;
		align-items: center;
		margin-top: 40px;
		color: white;
	}

	.hr-left,
	.hr-right {
		width: 130px;
		height: 3px;
		margin: 10px;
		background-color: white;
	}

	.signup-logos {
		display: flex;
		justify-content: space-between;
		width: 250px;
		margin-top: 30px;
	}

	.signup-logos > a {
		padding: 10px;
		text-decoration: none;
		border-radius: 1000px;
		height: 54px;
		background-color: white;
	}
</style>

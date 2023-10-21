<script lang="ts">
	import * as Tabs from "$lib/bits/tabs";
</script>

<div class="bg-background p-6 rounded-2xl shadow-card border border-accent/10">
	<Tabs.Root value="login" class="w-[380px]">
		<Tabs.List class="grid w-full grid-cols-2 bg-accent/7 rounded-9 p-1 shadow-inset h-10">
			<Tabs.Trigger
				value="login"
				class="h-8 rounded-7 data-[state=active]:shadow-button data-[state=active]:bg-background font-semibold text-foreground/80 data-[state=active]:text-foreground text-sm hover:text-foreground transition-all"
				>Login</Tabs.Trigger
			>
			<Tabs.Trigger
				value="register"
				class="h-8 rounded-7 data-[state=active]:shadow-button data-[state=active]:bg-background font-semibold text-foreground/80 data-[state=active]:text-foreground text-sm hover:text-foreground transition-all"
				>Register</Tabs.Trigger
			>
		</Tabs.List>
		<Tabs.Content value="login">
			<form class="flex flex-col pt-[22px]">
				<h2 class="font-semibold text-[19px] tracking-tight">Login to your account</h2>
				<p class="text-foreground/40 font-medium leading-none text-sm">to access all your data</p>
				<div class="flex flex-col pt-[19px] gap-4">
					<div class="flex flex-col gap-1">
						<label for="username" class="text-sm font-medium text-foreground">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							class="rounded-9 border border-accent/17 bg-background px-3 py-4 text-sm placeholder:text-foreground/40 h-12 outline-foreground/30"
							placeholder="name@domain.com"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="password" class="text-sm font-medium text-foreground">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							class="rounded-9 border border-accent/17 bg-background px-3 py-4 text-sm placeholder:text-foreground/40 h-12 outline-foreground/30"
							placeholder="Supersecret"
						/>
					</div>
				</div>
				<button
					class="w-full rounded-9 h-12 text-[15px] font-semibold text-background bg-accent shadow-button mt-[22px]"
				>
					Login
				</button>
			</form>
		</Tabs.Content>
		<Tabs.Content value="register">
			<form class="flex flex-col pt-[22px]">
				<h2 class="font-semibold text-[19px] tracking-tight">Register for an account</h2>
				<p class="text-foreground/40 font-medium leading-none text-sm">to start your journey</p>
				<div class="flex flex-col pt-[19px] gap-4">
					<div class="flex flex-col gap-1">
						<label for="username" class="text-sm font-medium text-foreground">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							class="rounded-9 border border-accent/17 bg-background px-3 py-4 text-sm placeholder:text-foreground/40 h-12 outline-foreground/30"
							placeholder="name@domain.com"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="password" class="text-sm font-medium text-foreground">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							class="rounded-9 border border-accent/17 bg-background px-3 py-4 text-sm placeholder:text-foreground/40 h-12 outline-foreground/30"
							placeholder="Supersecret"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="passwordConfirm" class="text-sm font-medium text-foreground"
							>Confirm Password</label
						>
						<input
							type="password"
							name="passwordConfirm"
							id="passwordConfirm"
							class="rounded-9 border border-accent/17 bg-background px-3 py-4 text-sm placeholder:text-foreground/40 h-12 outline-foreground/30"
							placeholder="Supersecret"
						/>
					</div>
				</div>
				<button
					class="w-full rounded-9 h-12 text-[15px] font-semibold text-background bg-accent shadow-button mt-[22px]"
				>
					Login
				</button>
			</form>
		</Tabs.Content>
	</Tabs.Root>
</div>

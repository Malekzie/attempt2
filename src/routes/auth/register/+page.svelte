<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Register</h1>
				<p class="text-balance text-muted-foreground">New to us? Sign up and start your journey!</p>
			</div>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Username</Label>
					<Input id="username" type="text" placeholder="Malekzie" required />
				</div>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
					</div>
					<Input id="password" type="password" required />
				</div>
				<Button type="submit" class="w-full">Register</Button>
				<Button variant="outline" class="w-full">Register with Google</Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Already have an account?
				<a href="/auth/login" class="underline"> Login </a>
			</div>
		</div>
	</div>
	<div class="hidden bg-muted lg:block">
		<img
			loading="lazy"
			src="https://images.unsplash.com/photo-1717954681473-2b3c638fbd19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="placeholder"
			width="1920"
			height="1080"
			class="h-full w-screen object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>

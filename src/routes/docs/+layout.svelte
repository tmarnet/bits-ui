<script lang="ts">
	import { SidebarNav, SiteHeader } from "@/components";
	import { navigation } from "@/config";
	import "@/styles/app.postcss";
</script>

<SiteHeader />
<main class="min-h-[calc(100vh-64px)]">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 container">
		<div class="lg:grid lg:grid-cols-12 lg:gap-6">
			<div class="lg:col-span-2 border-r border-border">
				<SidebarNav items={navigation.sidebar} />
			</div>
			<div class="lg:col-span-10 lg:col-start-4">
				<div class="lg:grid lg:grid-cols-9 lg:gap-6">
					<div class="lg:col-span-7">
						<slot />
					</div>
					<div class="lg:col-span-2 lg:col-start-11 order-first lg:order-last" />
				</div>
			</div>
		</div>
	</div>
</main>

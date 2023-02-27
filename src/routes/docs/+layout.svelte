<div class="flex">
	<div
		role="doc-chapter"
		class="sticky top-0 left-0 flex h-full w-60 flex-col px-8 py-20 max-md:hidden"
	>
		<ul>
			<li><a href="/docs/usage"><strong>How 2 use</strong></a></li>
			<li><a href="/docs/design"><strong>Design system</strong></a></li>
			<li><a href="/docs/history"><strong>History</strong></a></li>
			<li><a href="/docs/rule"><strong>Rule</strong></a></li>
		</ul>
	</div>
	<main
		class="flex w-full flex-grow justify-center px-12 py-20 scroll:w-3 scroll:bg-transparent scroll-tb:bg-gray-400/30 [&>*]:w-full"
	>
		<slot />
	</main>
</div>

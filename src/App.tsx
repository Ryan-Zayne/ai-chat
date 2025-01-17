export default function App() {
	return (
		<main class="flex min-h-[600px] max-w-md grow flex-col rounded-bl-[25px] bg-white shadow-xl">
			{/* Chat Header */}
			<header
				class="flex items-center gap-3 rounded-t-[25px] rounded-br-[25px] bg-purple-600 p-4 text-white"
			>
				<div class="size-10 rounded-full">
					<img src="/avatars/bot.svg" alt="AI Assistant" class="size-full object-cover" />
				</div>
				<div>
					<h1 class="font-medium">AI Chat</h1>
					<p class="text-sm text-purple-200">Online</p>
				</div>
			</header>

			{/* Chat Messages */}
			<section class="flex grow flex-col gap-4 p-4">
				{/* Bot Message */}
				<div class="flex gap-2">
					<div class="size-8 rounded-full">
						<img src="/avatars/bot.svg" alt="AI Assistant" class="size-full object-cover" />
					</div>
					<div class="max-w-[70%] rounded-2xl bg-gray-100 px-4 py-2">
						<p class="text-sm">Hi, I'm here to help! How can I assist you today?</p>
					</div>
				</div>

				{/* User Message */}
				<div class="flex flex-row-reverse gap-2">
					<div class="size-8 rounded-full">
						<img src="/avatars/user.svg" alt="User" class="size-full object-cover" />
					</div>
					<div class="max-w-[70%] rounded-2xl bg-purple-600 px-4 py-2 text-white">
						<p class="text-sm">Hi, I'm Alice.</p>
					</div>
				</div>
			</section>

			{/* Chat Input */}
			<section class="border-t p-4">
				<form class="">
					<div class="flex items-center gap-2">
						<input
							type="text"
							placeholder="Type a message..."
							class="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm
								focus:border-purple-600 focus:outline-none"
						/>
						<div class="flex gap-2">
							<button type="button" class="rounded-full hover:bg-gray-100">
								<span class="text-xl">😊</span>
							</button>
							<button
								type="submit"
								class="rounded-full bg-purple-600 px-2.5 py-2 text-white hover:bg-purple-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="size-5"
								>
									<path d="M22 2L11 13" />
									<path d="M22 2L15 22L11 13L2 9L22 2Z" />
								</svg>
							</button>
						</div>
					</div>
				</form>
			</section>
		</main>
	);
}

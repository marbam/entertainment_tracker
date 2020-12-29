<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Entertainment Tracking</title>
        @laravelPWA

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" integrity="sha512-+WF6UMXHki/uCy0vATJzyA9EmAcohIQuwpNz0qEO+5UeE5ibPejMRdFuARSrl1trs3skqie0rY/gNiolfaef5w==" crossorigin="anonymous" />

    </head>
    <body class="antialiased">



        <div class="relative flex bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                        <a href="{{ url('/dashboard') }}" class="text-sm text-gray-700 underline">Dashboard</a>
                    @else
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>

        <!-- Content Selector -->
        <div class="mx-auto flex">
            <div class="w-20 h-20 bg-green-500 rounded text-center flex border-2 border-black">
                <ion-icon class="m-auto" size="large" name="film-outline"></ion-icon>
            </div>

            <div class="w-20 h-20 rounded text-center flex border-2 border-black ml-2">
                <ion-icon class="m-auto" size="large" name="tv-outline"></ion-icon>
            </div>

            <div class="w-20 h-20 rounded text-center flex border-2 border-black ml-2">
                <ion-icon class="m-auto" size="large" name="game-controller-outline"></ion-icon>
            </div>

            <div class="w-20 h-20 rounded text-center flex border-2 border-black ml-2">
                <ion-icon class="m-auto" size="large" name="book-outline"></ion-icon>
            </div>
        </div>

        <!-- Movie Menu -->
        <div class="mx-auto flex pt-2">
            <div class="w-20 h-20 bg-green-500 rounded flex border-2 border-black">
                <div class="inline-block text-red-900 mt-6 ml-2">NETFLIX</div>
            </div>

            <div class="w-20 h-20 rounded text-center flex border-2 border-black ml-2">
                <div class="inline-block mt-6 ml-2 uppercase">Cinema</div>
            </div>

            <div class="w-20 h-20 rounded text-center flex border-2 border-black ml-2">
                <div class="inline-block mt-6 ml-7 uppercase">TV</div>
            </div>

            <div class="w-20 h-20 rounded text-center flex border-2 border-black ml-2">
                <ion-icon class="m-auto" size="large" name="ellipsis-horizontal-outline"></ion-icon>
            </div>
        </div>

        <!-- Date Selector -->
        <div class="mx-auto flex pt-2">
            <div class="w-20 h-20 rounded text-center flex border-2 border-black">
                <ion-icon class="m-auto" size="large" name="ellipsis-horizontal-outline"></ion-icon>
            </div>

            <div class="w-20 h-20 rounded flex border-2 border-black ml-2">
                <div class="inline-block m-auto text-center">SUN 28TH</div>
            </div>

            <div class="w-20 h-20 rounded flex border-2 border-black ml-2">
                <div class="inline-block m-auto text-center">MON 28TH</div>
            </div>

            <div class="w-20 h-20 bg-green-500 rounded flex border-2 border-black ml-2">
                <div class="inline-block text-center m-auto">Today</div>
            </div>
        </div>

        <!-- NEW - Work on Styling another day -->
        <div class="flex pt-2 w-80 mt-2">
            <input name="content border-2 border-black" type="text">
        </div>

        <!-- Autocomplete to go here at some point -->
        <!-- But not yet -->

        <button class="w-80 bg-green-600 text-white rounded border-2 border-black py-4 ml-4">Save</button>

        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    </body>
</html>

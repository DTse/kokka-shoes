<!DOCTYPE html>
<html>
  <head>
        <title>Kokka CMS</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Control the behavior of search engine crawling and indexing -->
        <meta name="robots" content="index,nofollow"><!-- All Search Engines -->
        <meta name="googlebot" content="index,nofollow"><!-- Google Specific -->

        <!-- Tells Google not to show the sitelinks search box -->
        <meta name="google" content="nositelinkssearchbox">

        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="194x194" href="/images/favicon-194x194.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
        <link rel="manifest" href="/images/site.webmanifest">
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#36304a">
        <link rel="shortcut icon" href="/images/favicon.ico">
        <meta name="apple-mobile-web-app-title" content="Kokka CMS">
        <meta name="application-name" content="Kokka CMS">
        <meta name="msapplication-TileColor" content="#36304a">
        <meta name="msapplication-TileImage" content="/images/mstile-144x144.png">
        <meta name="msapplication-config" content="/images/browserconfig.xml">
        <meta name="theme-color" content="#36304a">
    @yield('header')
  </head>
  <body>
    <div class="container">
      @yield('content')
    </div>
    @yield('scripts')
  </body>
</html>
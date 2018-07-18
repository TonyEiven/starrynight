<?php

use Illuminate\Support\Facades\Route;

Route::get('/gallery/overview.json', 'MovieController@getGalleryOverview');

Route::get('/gallery/movie.json', 'MovieController@getMovieDetail');

Route::get('/search/movie.json', 'SearchController@searchMovie');


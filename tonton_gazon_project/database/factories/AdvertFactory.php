<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Advert;
use Faker\Generator as Faker;

$factory->define(Advert::class, function (Faker $faker) {
    
        $u_ids = App\User::pluck('id')->toArray();
        $g_ids = App\Garden::pluck('id')->toArray();
    
        return [
                    
            'idAuthor' => $faker->randomElement($u_ids),
            'idGarden' => $faker->randomElement($g_ids),
            'title' => $faker->realText(50),
            'description' => $faker->paragraph(2,true),
            'state' => $faker->randomDigit,
                ];
            });

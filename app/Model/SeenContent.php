<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SeenContent extends Model
{
    protected $fillable = [
        'email', 'token'
    ];
}

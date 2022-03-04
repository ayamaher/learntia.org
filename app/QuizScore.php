<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuizScore extends Model
{
    protected $guarded = ['id'];

    public function student()
    {
        return $this->hasOne('App\User', 'id', 'user_id');
    }

    //END
}
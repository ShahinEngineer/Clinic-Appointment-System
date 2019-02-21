<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class clinic extends Model
{
    //
    protected $table = 'clinic';
    protected $fillable=['title','image','address'];
}

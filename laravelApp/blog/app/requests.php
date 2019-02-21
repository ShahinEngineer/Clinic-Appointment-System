<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class requests extends Model
{
    //
    protected $table = 'requests';
    protected $fillable=['id_clinic','full_name','mobile','email','appointment_date','approved'];
}

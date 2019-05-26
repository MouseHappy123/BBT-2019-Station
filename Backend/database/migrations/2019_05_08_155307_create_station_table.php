<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStationTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('station1', function (Blueprint $table) {
            $table->increments('id');
            $table->string('passenger1', 10);
            $table->string('passenger2', 10)->default('NULL');
            $table->string('passenger3', 10)->default('NULL');
            $table->string('destination', 20);
            $table->text('comment');
            $table->time('created_at')->default('NULL');
            $table->time('updated_at')->default('NULL');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('station');
    }
}

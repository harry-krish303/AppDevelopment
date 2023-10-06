package com.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Plant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="name", nullable = false)
	private String name;
	@Column(name="imgurl", nullable = false)
	private String imgurl;
	@Column(name="seasonal", nullable = false)
	private String seasonal;
	@Column(name="soil", nullable = false)
	private String soil;
	@Column(name="diseases", nullable = false)
	private String diseases;
	@Column(name="benefit", nullable = false)
	private String benefit;
	@Column(name="description", nullable = false)
	private String description;
	@Column(name="climate", nullable = false)
	private String climate;
	@Column(name="sunlight", nullable = false)
	private String sunlight;
	@Column(name="watering", nullable = false)
	private String watering;
	@Column(name="height", nullable = false)
	private String height;
	@Column(name="harvest", nullable = false)
	private String harvest;
	@Column(name="care", nullable = false)
	private String care;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public String getSeasonal() {
		return seasonal;
	}
	public void setSeasonal(String seasonal) {
		this.seasonal = seasonal;
	}
	public String getSoil() {
		return soil;
	}
	public void setSoil(String soil) {
		this.soil = soil;
	}
	public String getDiseases() {
		return diseases;
	}
	public void setDiseases(String diseases) {
		this.diseases = diseases;
	}
	public String getBenefit() {
		return benefit;
	}
	public void setBenefit(String benefit) {
		this.benefit = benefit;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getClimate() {
		return climate;
	}
	public void setClimate(String climate) {
		this.climate = climate;
	}
	public String getSunlight() {
		return sunlight;
	}
	public void setSunlight(String sunlight) {
		this.sunlight = sunlight;
	}
	public String getWatering() {
		return watering;
	}
	public void setWatering(String watering) {
		this.watering = watering;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getHarvest() {
		return harvest;
	}
	public void setHarvest(String harvest) {
		this.harvest = harvest;
	}
	public String getCare() {
		return care;
	}
	public void setCare(String care) {
		this.care = care;
	}
	public Plant(int id, String name, String imgurl, String seasonal, String soil, String diseases, String benefit,
			String description, String climate, String sunlight, String watering, String height, String harvest,
			String care) {
		super();
		this.id = id;
		this.name = name;
		this.imgurl = imgurl;
		this.seasonal = seasonal;
		this.soil = soil;
		this.diseases = diseases;
		this.benefit = benefit;
		this.description = description;
		this.climate = climate;
		this.sunlight = sunlight;
		this.watering = watering;
		this.height = height;
		this.harvest = harvest;
		this.care = care;
	}
	public Plant() {
		super();
		
	}
	
	

}
